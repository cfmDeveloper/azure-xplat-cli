// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3965.azuredatalakestore.net/webhdfs/v1/adlsclifolder03/expirefile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': '313d2c85-9d43-45e1-802c-1623f98d7e12',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:43 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3965.azuredatalakestore.net/webhdfs/v1/adlsclifolder03/expirefile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': '313d2c85-9d43-45e1-802c-1623f98d7e12',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:43 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162204589,\"modificationTime\":1481162204589,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8cf77fbd-bb4a-4a63-b8ec-e720c85c4fab',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:44 GMT',
  connection: 'close',
  'content-length': '308' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162204589,\"modificationTime\":1481162204589,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8cf77fbd-bb4a-4a63-b8ec-e720c85c4fab',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:44 GMT',
  connection: 'close',
  'content-length': '308' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162204589,\"modificationTime\":1481162204589,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8c0bf709-66cd-4dc2-bf3a-80a8f21c9cfc',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:45 GMT',
  connection: 'close',
  'content-length': '308' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162204589,\"modificationTime\":1481162204589,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8c0bf709-66cd-4dc2-bf3a-80a8f21c9cfc',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:45 GMT',
  connection: 'close',
  'content-length': '308' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlsclifolder03%2Fexpirefile.txt?expiryOption=Absolute&expireTime=4636834628007&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'f744c47c-2beb-4521-9c10-0d1ae24c6780',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:45 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlsclifolder03%2Fexpirefile.txt?expiryOption=Absolute&expireTime=4636834628007&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'f744c47c-2beb-4521-9c10-0d1ae24c6780',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:45 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162204589,\"modificationTime\":1481162204589,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":4636834628007,\"msExpirationTime\":4636834628007}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '66c41dac-b5a3-40fe-affa-066fa6669257',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:46 GMT',
  connection: 'close',
  'content-length': '332' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162204589,\"modificationTime\":1481162204589,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":4636834628007,\"msExpirationTime\":4636834628007}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '66c41dac-b5a3-40fe-affa-066fa6669257',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:46 GMT',
  connection: 'close',
  'content-length': '332' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162204589,\"modificationTime\":1481162204589,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":4636834628007,\"msExpirationTime\":4636834628007}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '53a9b821-ef4c-4bf0-ada8-abe3f5be3633',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:46 GMT',
  connection: 'close',
  'content-length': '332' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162204589,\"modificationTime\":1481162204589,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":4636834628007,\"msExpirationTime\":4636834628007}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '53a9b821-ef4c-4bf0-ada8-abe3f5be3633',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:46 GMT',
  connection: 'close',
  'content-length': '332' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlsclifolder03%2Fexpirefile.txt?expiryOption=NeverExpire&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '2233b8f1-1feb-4d28-ba32-70497db23099',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:47 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .put('/WebHdfsExt/adlsclifolder03%2Fexpirefile.txt?expiryOption=NeverExpire&op=SETEXPIRY&api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '2233b8f1-1feb-4d28-ba32-70497db23099',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:47 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162204589,\"modificationTime\":1481162204589,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5f683702-28cf-4eae-9815-26d5520c7b78',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:47 GMT',
  connection: 'close',
  'content-length': '308' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder03%2Fexpirefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162204589,\"modificationTime\":1481162204589,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5f683702-28cf-4eae-9815-26d5520c7b78',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:47 GMT',
  connection: 'close',
  'content-length': '308' });
 return result; }]];