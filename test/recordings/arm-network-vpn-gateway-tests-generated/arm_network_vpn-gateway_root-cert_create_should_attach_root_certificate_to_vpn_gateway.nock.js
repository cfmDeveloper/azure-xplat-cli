// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e55e7c87-7bdc-445b-8213-56cdfca27374',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'fc53715f-c87b-43fc-9876-78ef5139cf26',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westeurope';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"17bd232e-1f6d-4ce2-9ca7-8973026b5589\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"17bd232e-1f6d-4ce2-9ca7-8973026b5589\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2204',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e6cf08a1-9bae-49e3-b665-0d61bb367883',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '55e8bed8-e89f-4ebb-bc11-67b43af8cc37',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124250Z:55e8bed8-e89f-4ebb-bc11-67b43af8cc37',
  date: 'Tue, 18 Apr 2017 12:42:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"17bd232e-1f6d-4ce2-9ca7-8973026b5589\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"17bd232e-1f6d-4ce2-9ca7-8973026b5589\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2204',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e6cf08a1-9bae-49e3-b665-0d61bb367883',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '55e8bed8-e89f-4ebb-bc11-67b43af8cc37',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124250Z:55e8bed8-e89f-4ebb-bc11-67b43af8cc37',
  date: 'Tue, 18 Apr 2017 12:42:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"bc232fb7-219b-446a-9c2e-90d8dc0f4961\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"bc232fb7-219b-446a-9c2e-90d8dc0f4961\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [\r\n        {\r\n          \"name\": \"test-root-cert\",\r\n          \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRootCertificates/test-root-cert\",\r\n          \"etag\": \"W/\\\"bc232fb7-219b-446a-9c2e-90d8dc0f4961\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Updating\",\r\n            \"publicCertData\": \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tDQpNSUlDNXpDQ0FjK2dBd0lCQWdJUWZHMzNsNVlTcTVsSnRKTElEVTdXbFRBTkJna3Foa2lHOXcwQkFRc0ZBREFXDQpNUlF3RWdZRFZRUUREQXRRTWxOU2IyOTBRMlZ5ZERBZUZ3MHhOekEwTVRnd09UVXlORE5hRncwME9EQXpNekV5DQpNVEF3TURGYU1CWXhGREFTQmdOVkJBTU1DMUF5VTFKdmIzUkRaWEowTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGDQpBQU9DQVE4QU1JSUJDZ0tDQVFFQTRtRUZxL3JkeU1rK2YybU9mTlphQk5RbXdkUGtLR1NDdjlMY0tKK3dYYTE2DQp0OFV5NlBITkRFTFRWR0Q2T1dka3NpQmloa2JzR0k0TkRaUDZjV2hCMTJvOWdlOEpjRy9lSHYySjZXY202OGRFDQpvSmlvTys3ZXo1NG1IemUvWERvMFRRUEJBdUxvK2ZQZzRLVHFLYnd2QW5UVVIrR2d0YVgyQTdhN2ZDdGYvMElSDQpnK1lLZ3RoTkN5OWs0KzZ4SmVGS2d6UVpzUENNemsyWS85TXFUdStxelZYRWxmYjMxV1picFpaOHNOb3ZjNDZJDQpFYVBmVy9abDRLSFpaTGV6elpRdUd0TkVjdGVRUndUWTExaS9JOU9jSWRzYktha1N4SU5FeHl6ZFhVK0dQZ3VSDQpNYnlVWG03MHVWQUJXYVJxTlpJSjB1cE85MHJsWjc0aDh3bUIxdXUyTVFJREFRQUJvekV3THpBT0JnTlZIUThCDQpBZjhFQkFNQ0FnUXdIUVlEVlIwT0JCWUVGTGNyZklwc0FDbVgxcE5STDBITTZqdkE2N0UwTUEwR0NTcUdTSWIzDQpEUUVCQ3dVQUE0SUJBUURHckFjWTZNOEx5WEtyV3ZUZ1VyNUJ1TXlxRTlZSTU0b2p1NjIyZXM3a3h2N0g0YTJiDQpQMlYveTdrN0hKd3krOFBRcUlrVmdjSFZ6TE50UGxFMCsyUTU3emFHekRFbGdRcWNaanBYeVkzYlNDVjFZbWNqDQpwN2VidDdtK2hUZk1oWjM3eFI2Yzd4QjlMQjFack9ZMmdlZ2VlRWIxQS80KzFDbDczODNGdmd6V012T0x2WGFtDQprQTVWUGFhekdlOWVBZUFxRm1nSDFLZDFYOC8rZ2QxWmVFNnlXZ3QxQ1lkdjE5dEVnSEhBeDNmVVBJM3R5Nk9GDQp2SHQvY2IrUlBVR1d3aGlxN2l0U05MeHFzc2tiOFhJc1lrQmZoV0d1RTV5RWxWZk1oYzI4ckFJOHFjTUtUT3FlDQpRbDByaG5RT3QzMnNFbGdVSDZaU25SNkhDR2Iyam1aUU1WbngNCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0=\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3943',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'cefc74a9-47f1-49e0-aa2a-f134907796d0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/cefc74a9-47f1-49e0-aa2a-f134907796d0?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '190a5036-440a-45a6-a550-25f1fc6f7882',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124251Z:190a5036-440a-45a6-a550-25f1fc6f7882',
  date: 'Tue, 18 Apr 2017 12:42:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"bc232fb7-219b-446a-9c2e-90d8dc0f4961\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"bc232fb7-219b-446a-9c2e-90d8dc0f4961\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [\r\n        {\r\n          \"name\": \"test-root-cert\",\r\n          \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRootCertificates/test-root-cert\",\r\n          \"etag\": \"W/\\\"bc232fb7-219b-446a-9c2e-90d8dc0f4961\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Updating\",\r\n            \"publicCertData\": \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tDQpNSUlDNXpDQ0FjK2dBd0lCQWdJUWZHMzNsNVlTcTVsSnRKTElEVTdXbFRBTkJna3Foa2lHOXcwQkFRc0ZBREFXDQpNUlF3RWdZRFZRUUREQXRRTWxOU2IyOTBRMlZ5ZERBZUZ3MHhOekEwTVRnd09UVXlORE5hRncwME9EQXpNekV5DQpNVEF3TURGYU1CWXhGREFTQmdOVkJBTU1DMUF5VTFKdmIzUkRaWEowTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGDQpBQU9DQVE4QU1JSUJDZ0tDQVFFQTRtRUZxL3JkeU1rK2YybU9mTlphQk5RbXdkUGtLR1NDdjlMY0tKK3dYYTE2DQp0OFV5NlBITkRFTFRWR0Q2T1dka3NpQmloa2JzR0k0TkRaUDZjV2hCMTJvOWdlOEpjRy9lSHYySjZXY202OGRFDQpvSmlvTys3ZXo1NG1IemUvWERvMFRRUEJBdUxvK2ZQZzRLVHFLYnd2QW5UVVIrR2d0YVgyQTdhN2ZDdGYvMElSDQpnK1lLZ3RoTkN5OWs0KzZ4SmVGS2d6UVpzUENNemsyWS85TXFUdStxelZYRWxmYjMxV1picFpaOHNOb3ZjNDZJDQpFYVBmVy9abDRLSFpaTGV6elpRdUd0TkVjdGVRUndUWTExaS9JOU9jSWRzYktha1N4SU5FeHl6ZFhVK0dQZ3VSDQpNYnlVWG03MHVWQUJXYVJxTlpJSjB1cE85MHJsWjc0aDh3bUIxdXUyTVFJREFRQUJvekV3THpBT0JnTlZIUThCDQpBZjhFQkFNQ0FnUXdIUVlEVlIwT0JCWUVGTGNyZklwc0FDbVgxcE5STDBITTZqdkE2N0UwTUEwR0NTcUdTSWIzDQpEUUVCQ3dVQUE0SUJBUURHckFjWTZNOEx5WEtyV3ZUZ1VyNUJ1TXlxRTlZSTU0b2p1NjIyZXM3a3h2N0g0YTJiDQpQMlYveTdrN0hKd3krOFBRcUlrVmdjSFZ6TE50UGxFMCsyUTU3emFHekRFbGdRcWNaanBYeVkzYlNDVjFZbWNqDQpwN2VidDdtK2hUZk1oWjM3eFI2Yzd4QjlMQjFack9ZMmdlZ2VlRWIxQS80KzFDbDczODNGdmd6V012T0x2WGFtDQprQTVWUGFhekdlOWVBZUFxRm1nSDFLZDFYOC8rZ2QxWmVFNnlXZ3QxQ1lkdjE5dEVnSEhBeDNmVVBJM3R5Nk9GDQp2SHQvY2IrUlBVR1d3aGlxN2l0U05MeHFzc2tiOFhJc1lrQmZoV0d1RTV5RWxWZk1oYzI4ckFJOHFjTUtUT3FlDQpRbDByaG5RT3QzMnNFbGdVSDZaU25SNkhDR2Iyam1aUU1WbngNCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0=\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3943',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'cefc74a9-47f1-49e0-aa2a-f134907796d0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/cefc74a9-47f1-49e0-aa2a-f134907796d0?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '190a5036-440a-45a6-a550-25f1fc6f7882',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124251Z:190a5036-440a-45a6-a550-25f1fc6f7882',
  date: 'Tue, 18 Apr 2017 12:42:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/cefc74a9-47f1-49e0-aa2a-f134907796d0?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd433ea0f-7d53-4d9b-b361-2bac41f9d481',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'e51c7f74-8cdc-4eec-aec0-cd81ed587df4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124321Z:e51c7f74-8cdc-4eec-aec0-cd81ed587df4',
  date: 'Tue, 18 Apr 2017 12:43:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/cefc74a9-47f1-49e0-aa2a-f134907796d0?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd433ea0f-7d53-4d9b-b361-2bac41f9d481',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'e51c7f74-8cdc-4eec-aec0-cd81ed587df4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124321Z:e51c7f74-8cdc-4eec-aec0-cd81ed587df4',
  date: 'Tue, 18 Apr 2017 12:43:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/cefc74a9-47f1-49e0-aa2a-f134907796d0?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c46d2495-3202-41e0-996c-60c51c445b2a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '712cc472-e30c-4e57-929f-05b82a3d6f53',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124352Z:712cc472-e30c-4e57-929f-05b82a3d6f53',
  date: 'Tue, 18 Apr 2017 12:43:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/cefc74a9-47f1-49e0-aa2a-f134907796d0?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c46d2495-3202-41e0-996c-60c51c445b2a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '712cc472-e30c-4e57-929f-05b82a3d6f53',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124352Z:712cc472-e30c-4e57-929f-05b82a3d6f53',
  date: 'Tue, 18 Apr 2017 12:43:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"4bd2140c-d177-4379-a627-52df27134e4a\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"4bd2140c-d177-4379-a627-52df27134e4a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [\r\n        {\r\n          \"name\": \"test-root-cert\",\r\n          \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRootCertificates/test-root-cert\",\r\n          \"etag\": \"W/\\\"4bd2140c-d177-4379-a627-52df27134e4a\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Succeeded\",\r\n            \"publicCertData\": \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tDQpNSUlDNXpDQ0FjK2dBd0lCQWdJUWZHMzNsNVlTcTVsSnRKTElEVTdXbFRBTkJna3Foa2lHOXcwQkFRc0ZBREFXDQpNUlF3RWdZRFZRUUREQXRRTWxOU2IyOTBRMlZ5ZERBZUZ3MHhOekEwTVRnd09UVXlORE5hRncwME9EQXpNekV5DQpNVEF3TURGYU1CWXhGREFTQmdOVkJBTU1DMUF5VTFKdmIzUkRaWEowTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGDQpBQU9DQVE4QU1JSUJDZ0tDQVFFQTRtRUZxL3JkeU1rK2YybU9mTlphQk5RbXdkUGtLR1NDdjlMY0tKK3dYYTE2DQp0OFV5NlBITkRFTFRWR0Q2T1dka3NpQmloa2JzR0k0TkRaUDZjV2hCMTJvOWdlOEpjRy9lSHYySjZXY202OGRFDQpvSmlvTys3ZXo1NG1IemUvWERvMFRRUEJBdUxvK2ZQZzRLVHFLYnd2QW5UVVIrR2d0YVgyQTdhN2ZDdGYvMElSDQpnK1lLZ3RoTkN5OWs0KzZ4SmVGS2d6UVpzUENNemsyWS85TXFUdStxelZYRWxmYjMxV1picFpaOHNOb3ZjNDZJDQpFYVBmVy9abDRLSFpaTGV6elpRdUd0TkVjdGVRUndUWTExaS9JOU9jSWRzYktha1N4SU5FeHl6ZFhVK0dQZ3VSDQpNYnlVWG03MHVWQUJXYVJxTlpJSjB1cE85MHJsWjc0aDh3bUIxdXUyTVFJREFRQUJvekV3THpBT0JnTlZIUThCDQpBZjhFQkFNQ0FnUXdIUVlEVlIwT0JCWUVGTGNyZklwc0FDbVgxcE5STDBITTZqdkE2N0UwTUEwR0NTcUdTSWIzDQpEUUVCQ3dVQUE0SUJBUURHckFjWTZNOEx5WEtyV3ZUZ1VyNUJ1TXlxRTlZSTU0b2p1NjIyZXM3a3h2N0g0YTJiDQpQMlYveTdrN0hKd3krOFBRcUlrVmdjSFZ6TE50UGxFMCsyUTU3emFHekRFbGdRcWNaanBYeVkzYlNDVjFZbWNqDQpwN2VidDdtK2hUZk1oWjM3eFI2Yzd4QjlMQjFack9ZMmdlZ2VlRWIxQS80KzFDbDczODNGdmd6V012T0x2WGFtDQprQTVWUGFhekdlOWVBZUFxRm1nSDFLZDFYOC8rZ2QxWmVFNnlXZ3QxQ1lkdjE5dEVnSEhBeDNmVVBJM3R5Nk9GDQp2SHQvY2IrUlBVR1d3aGlxN2l0U05MeHFzc2tiOFhJc1lrQmZoV0d1RTV5RWxWZk1oYzI4ckFJOHFjTUtUT3FlDQpRbDByaG5RT3QzMnNFbGdVSDZaU25SNkhDR2Iyam1aUU1WbngNCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0=\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4158',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b6448781-5ba8-480d-b107-bfc934238732',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'f1c0e235-0e69-4717-ab12-e8324c6b8080',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124353Z:f1c0e235-0e69-4717-ab12-e8324c6b8080',
  date: 'Tue, 18 Apr 2017 12:43:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"4bd2140c-d177-4379-a627-52df27134e4a\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"4bd2140c-d177-4379-a627-52df27134e4a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [\r\n        {\r\n          \"name\": \"test-root-cert\",\r\n          \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRootCertificates/test-root-cert\",\r\n          \"etag\": \"W/\\\"4bd2140c-d177-4379-a627-52df27134e4a\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Succeeded\",\r\n            \"publicCertData\": \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tDQpNSUlDNXpDQ0FjK2dBd0lCQWdJUWZHMzNsNVlTcTVsSnRKTElEVTdXbFRBTkJna3Foa2lHOXcwQkFRc0ZBREFXDQpNUlF3RWdZRFZRUUREQXRRTWxOU2IyOTBRMlZ5ZERBZUZ3MHhOekEwTVRnd09UVXlORE5hRncwME9EQXpNekV5DQpNVEF3TURGYU1CWXhGREFTQmdOVkJBTU1DMUF5VTFKdmIzUkRaWEowTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGDQpBQU9DQVE4QU1JSUJDZ0tDQVFFQTRtRUZxL3JkeU1rK2YybU9mTlphQk5RbXdkUGtLR1NDdjlMY0tKK3dYYTE2DQp0OFV5NlBITkRFTFRWR0Q2T1dka3NpQmloa2JzR0k0TkRaUDZjV2hCMTJvOWdlOEpjRy9lSHYySjZXY202OGRFDQpvSmlvTys3ZXo1NG1IemUvWERvMFRRUEJBdUxvK2ZQZzRLVHFLYnd2QW5UVVIrR2d0YVgyQTdhN2ZDdGYvMElSDQpnK1lLZ3RoTkN5OWs0KzZ4SmVGS2d6UVpzUENNemsyWS85TXFUdStxelZYRWxmYjMxV1picFpaOHNOb3ZjNDZJDQpFYVBmVy9abDRLSFpaTGV6elpRdUd0TkVjdGVRUndUWTExaS9JOU9jSWRzYktha1N4SU5FeHl6ZFhVK0dQZ3VSDQpNYnlVWG03MHVWQUJXYVJxTlpJSjB1cE85MHJsWjc0aDh3bUIxdXUyTVFJREFRQUJvekV3THpBT0JnTlZIUThCDQpBZjhFQkFNQ0FnUXdIUVlEVlIwT0JCWUVGTGNyZklwc0FDbVgxcE5STDBITTZqdkE2N0UwTUEwR0NTcUdTSWIzDQpEUUVCQ3dVQUE0SUJBUURHckFjWTZNOEx5WEtyV3ZUZ1VyNUJ1TXlxRTlZSTU0b2p1NjIyZXM3a3h2N0g0YTJiDQpQMlYveTdrN0hKd3krOFBRcUlrVmdjSFZ6TE50UGxFMCsyUTU3emFHekRFbGdRcWNaanBYeVkzYlNDVjFZbWNqDQpwN2VidDdtK2hUZk1oWjM3eFI2Yzd4QjlMQjFack9ZMmdlZ2VlRWIxQS80KzFDbDczODNGdmd6V012T0x2WGFtDQprQTVWUGFhekdlOWVBZUFxRm1nSDFLZDFYOC8rZ2QxWmVFNnlXZ3QxQ1lkdjE5dEVnSEhBeDNmVVBJM3R5Nk9GDQp2SHQvY2IrUlBVR1d3aGlxN2l0U05MeHFzc2tiOFhJc1lrQmZoV0d1RTV5RWxWZk1oYzI4ckFJOHFjTUtUT3FlDQpRbDByaG5RT3QzMnNFbGdVSDZaU25SNkhDR2Iyam1aUU1WbngNCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0=\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4158',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b6448781-5ba8-480d-b107-bfc934238732',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'f1c0e235-0e69-4717-ab12-e8324c6b8080',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124353Z:f1c0e235-0e69-4717-ab12-e8324c6b8080',
  date: 'Tue, 18 Apr 2017 12:43:52 GMT',
  connection: 'close' });
 return result; }]];