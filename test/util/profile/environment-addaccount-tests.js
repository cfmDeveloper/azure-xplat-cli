/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var _ = require('underscore');
var should = require('should');
var sinon = require('sinon');
require('streamline').register()

var constants = require('../../../lib/util/constants');
var profile = require('../../../lib/util/profile');
var subscriptionUtils = require('../../../lib/util/profile/subscriptionUtils._js');

var expectedUserName = 'user@somedomain.example';
var expectedPassword = 'sekretPa$$w0rd';

var expectedSubscriptions = 
[
  {
    subscriptionId: 'db1ab6f0-4769-4b27-930e-01e2ef9c123c',
    subscriptionName: 'Account',
    username: expectedUserName
  },
  {
    subscriptionId: 'db1ab6f0-4769-4b27-930e-01e2ef9c124d',
    subscriptionName: 'Other',
    username: expectedUserName
  },
  {
    subscriptionId: 'db1ab6f0-4769-4b27-930e-01e2ef9c125e',
    subscriptionName: 'External',
    username: expectedUserName
  }
];

var testAsmSubscriptions = [
  {
    subscriptionId: 'db1ab6f0-4769-4b27-930e-01e2ef9c123c',
    subscriptionName: 'Account'
  },
  {
    subscriptionId: 'db1ab6f0-4769-4b27-930e-01e2ef9c124d',
    subscriptionName: 'Other'
  }
];

var testArmSubscriptions = [
  {
    subscriptionId: 'db1ab6f0-4769-4b27-930e-01e2ef9c125e', // a new one, arm specific
    displayName: 'External'
  },
  {
    subscriptionId: 'db1ab6f0-4769-4b27-930e-01e2ef9c123c', //this is the duplicate with asm one
    displayName: 'Account' 
  }
];

var expectedToken = {
  accessToken: 'a dummy token',
  expiresOn: new Date(Date.now() + 2 * 60 * 60 * 1000),
  userId: expectedUserName,
  authenticateRequest: function () { }
};

var testAsmSubscriptionClient = {
  subscriptions: {
    list: function (callback) {
      callback(null, {subscriptions: testAsmSubscriptions });
    }
  }
};

var testTenantIds = ['2d006e8c-61e7-4cd2-8804-b4177a4341a1'];

var testArmSubscriptionClient = {
  subscriptions: {
    list: function (callback) {
      callback(null, {subscriptions: testArmSubscriptions });
    }
  },
  tenants: {
    list: function (callback) {
      callback(null, {
        tenantIds: testTenantIds.map(function (id) {
          return { tenantId: id };})
        }
      );
    }
  }
};

describe('Environment', function () {
  var environment;

  before(function () {
    environment = new profile.Environment({
      name: 'TestEnvironment',
      activeDirectoryEndpointUrl: 'http://notreal.example',
      commonTenantName: 'common',
      activeDirectoryResourceId: 'http://login.notreal.example'
    });
    
    sinon.stub(environment, 'acquireToken').callsArgWith(3/*4th parameter of 'acquireToken' is the callback*/, 
      null/*no error*/, expectedToken/*the access token*/);
    sinon.stub(environment, 'getAsmClient').returns(testAsmSubscriptionClient);
    sinon.stub(environment, 'getArmClient').returns(testArmSubscriptionClient);
  });

  describe('When creating account', function () {
    var subscriptions;

    beforeEach(function (done) {
      environment.addAccount(expectedUserName, expectedPassword, function (err, newSubscriptions) {
        subscriptions = newSubscriptions;
        done();
      });
    });

    it('should have called the token provider', function () {
      environment.acquireToken.called.should.be.true;
    });

    it('should have call to get asm client', function () {
      environment.getAsmClient.called.should.be.true;
    });
    
    it('should have call to get arm client', function () {
      environment.getArmClient.called.should.be.true;
    });

    it('should pass expected configuration to token provider', function () {
      var username = environment.acquireToken.firstCall.args[0];
      username.should.equal(expectedUserName);

      var password = environment.acquireToken.firstCall.args[1];
      password.should.equal(expectedPassword);

      var tenantId_1 = environment.acquireToken.firstCall.args[2];
      tenantId_1.should.equal(''); // '' mean using the common tenant

      var tenantId_2 = environment.acquireToken.secondCall.args[2];
      tenantId_2.should.equal(testTenantIds[0]);
    });

    it('should return a subscription with expected username', function () {
      should.exist(subscriptions[0].username);
      subscriptions[0].username.should.equal(expectedUserName);
    });

    it('should return listed subscriptions', function () {
      subscriptions.should.have.length(expectedSubscriptions.length);
      for(var i = 0, len = subscriptions.length; i < len; ++i) {
        subscriptions[i].id.should.equal(expectedSubscriptions[i].subscriptionId);
        subscriptions[i].name.should.equal(expectedSubscriptions[i].subscriptionName);
      }
    });

    it('should have same username for all subscription', function () {
      subscriptions.forEach(function (s) {
        s.username.should.equal(expectedUserName);
      });
    });
  });
});
