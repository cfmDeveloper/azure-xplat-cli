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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"37d6e957-d4d4-4b2c-88c0-8a23250d5ff1\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"017c473a-91c9-40ca-bec5-d918a2eebed0\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '676',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"37d6e957-d4d4-4b2c-88c0-8a23250d5ff1"',
  'x-ms-request-id': '4da192ed-7810-447f-a81c-667f22554fdd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '3dadabc0-5245-46e3-849f-2232c1e81de0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T104519Z:3dadabc0-5245-46e3-849f-2232c1e81de0',
  date: 'Mon, 07 Aug 2017 10:45:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"37d6e957-d4d4-4b2c-88c0-8a23250d5ff1\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"017c473a-91c9-40ca-bec5-d918a2eebed0\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '676',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"37d6e957-d4d4-4b2c-88c0-8a23250d5ff1"',
  'x-ms-request-id': '4da192ed-7810-447f-a81c-667f22554fdd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '3dadabc0-5245-46e3-849f-2232c1e81de0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T104519Z:3dadabc0-5245-46e3-849f-2232c1e81de0',
  date: 'Mon, 07 Aug 2017 10:45:19 GMT',
  connection: 'close' });
 return result; }]];