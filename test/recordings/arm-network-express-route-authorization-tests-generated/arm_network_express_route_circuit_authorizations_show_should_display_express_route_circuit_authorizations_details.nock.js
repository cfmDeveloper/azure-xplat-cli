// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitAuthorizationName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName\",\r\n  \"etag\": \"W/\\\"cf30468a-b700-4483-9c09-dbf7f2b929b2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"372de206-aae7-4679-8c79-f8401381f16b\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ae72502-e766-494c-b763-04d4297d10f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '215c691b-a2f3-4a39-8030-9b6e03ede72b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T130527Z:215c691b-a2f3-4a39-8030-9b6e03ede72b',
  date: 'Wed, 12 Jul 2017 13:05:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitAuthorizationName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName\",\r\n  \"etag\": \"W/\\\"cf30468a-b700-4483-9c09-dbf7f2b929b2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"372de206-aae7-4679-8c79-f8401381f16b\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ae72502-e766-494c-b763-04d4297d10f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '215c691b-a2f3-4a39-8030-9b6e03ede72b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T130527Z:215c691b-a2f3-4a39-8030-9b6e03ede72b',
  date: 'Wed, 12 Jul 2017 13:05:26 GMT',
  connection: 'close' });
 return result; }]];