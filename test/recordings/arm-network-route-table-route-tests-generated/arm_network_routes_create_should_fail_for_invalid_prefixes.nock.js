// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName?api-version=2017-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '272',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd738aa12-3532-4174-84a2-6ec8c19cb152',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'a25e63c4-ce1a-441c-8b32-75667d157a2b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101607Z:a25e63c4-ce1a-441c-8b32-75667d157a2b',
  date: 'Mon, 07 Aug 2017 10:16:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName?api-version=2017-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '272',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd738aa12-3532-4174-84a2-6ec8c19cb152',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'a25e63c4-ce1a-441c-8b32-75667d157a2b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101607Z:a25e63c4-ce1a-441c-8b32-75667d157a2b',
  date: 'Mon, 07 Aug 2017 10:16:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName?api-version=2017-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidCIDRNotation\",\r\n    \"message\": \"The address prefix 10.11.12.13/8 in resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName has an invalid CIDR notation. For the given prefix length, the address prefix should be 10.0.0.0/8.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '408',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '51390462-ecf6-4936-adaf-641e9b01e05f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1536934d-09ac-45b3-bdb4-e53be14d0211',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101609Z:1536934d-09ac-45b3-bdb4-e53be14d0211',
  date: 'Mon, 07 Aug 2017 10:16:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName?api-version=2017-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidCIDRNotation\",\r\n    \"message\": \"The address prefix 10.11.12.13/8 in resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName has an invalid CIDR notation. For the given prefix length, the address prefix should be 10.0.0.0/8.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '408',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '51390462-ecf6-4936-adaf-641e9b01e05f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1536934d-09ac-45b3-bdb4-e53be14d0211',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101609Z:1536934d-09ac-45b3-bdb4-e53be14d0211',
  date: 'Mon, 07 Aug 2017 10:16:08 GMT',
  connection: 'close' });
 return result; }]];