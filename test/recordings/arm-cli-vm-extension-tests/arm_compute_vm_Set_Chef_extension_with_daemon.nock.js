// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99',
    name: 'Pay-As-You-Go',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'abeb039a-5e53-40ee-b48f-0c99bdc99d15',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9589/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"6c90500d-bd1e-4e81-b5ce-2f04a165fcd6\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"clic2a7b7650cf03a54-os-1482481621235\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext6440.blob.core.windows.net/xplatstoragecntext160/clic2a7b7650cf03a54-os-1482481621235.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9589/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext6440.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Chef.Bootstrap.WindowsAzure\",\r\n        \"type\": \"ChefClient\",\r\n        \"typeHandlerVersion\": \"1210.12\",\r\n        \"autoUpgradeMinorVersion\": false,\r\n        \"settings\": {\"client_rb\":\"log_level        :info\\nlog_location     \\\"c:/chef/logs\\\"\\nchef_server_url  \\\"https://api.opscode.com/organizations/orgname\\\"\\nvalidation_client_name \\t\\\"orgname-validator\\\"\",\"chef_service_interval\":\"30\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"westus\",\r\n      \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9589/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient\",\r\n      \"name\": \"ChefClient\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n        \"type\": \"IaaSDiagnostics\",\r\n        \"typeHandlerVersion\": \"1.5\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjQwOTYiPjxEaWFnbm9zdGljSW5mcmFzdHJ1Y3R1cmVMb2dzIHNjaGVkdWxlZFRyYW5zZmVyUGVyaW9kPSJQVDFNIiBzY2hlZHVsZWRUcmFuc2ZlckxvZ0xldmVsRmlsdGVyPSJXYXJuaW5nIi8+PFBlcmZvcm1hbmNlQ291bnRlcnMgc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3IoX1RvdGFsKVwlIFByb2Nlc3NvciBUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSB1dGlsaXphdGlvbiIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yKF9Ub3RhbClcJSBQcml2aWxlZ2VkIFRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHByaXZpbGVnZWQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yKF9Ub3RhbClcJSBVc2VyIFRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHVzZXIgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yIEluZm9ybWF0aW9uKF9Ub3RhbClcUHJvY2Vzc29yIEZyZXF1ZW5jeSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIGZyZXF1ZW5jeSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcU3lzdGVtXFByb2Nlc3NlcyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iUHJvY2Vzc2VzIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzKF9Ub3RhbClcVGhyZWFkIENvdW50IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJUaHJlYWRzIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzKF9Ub3RhbClcSGFuZGxlIENvdW50IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJIYW5kbGVzIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcJSBDb21taXR0ZWQgQnl0ZXMgSW4gVXNlIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSB1c2FnZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XEF2YWlsYWJsZSBCeXRlcyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkJ5dGVzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IGF2YWlsYWJsZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XENvbW1pdHRlZCBCeXRlcyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkJ5dGVzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IGNvbW1pdHRlZCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XENvbW1pdCBMaW1pdCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkJ5dGVzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IGNvbW1pdCBsaW1pdCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XFBvb2wgUGFnZWQgQnl0ZXMiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBwYWdlZCBwb29sIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUG9vbCBOb25wYWdlZCBCeXRlcyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkJ5dGVzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IG5vbi1wYWdlZCBwb29sIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2soX1RvdGFsKVwlIERpc2sgVGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIGFjdGl2ZSB0aW1lIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2soX1RvdGFsKVwlIERpc2sgUmVhZCBUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgYWN0aXZlIHJlYWQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrKF9Ub3RhbClcJSBEaXNrIFdyaXRlIFRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhY3RpdmUgd3JpdGUgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrKF9Ub3RhbClcRGlzayBUcmFuc2ZlcnMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnRQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIG9wZXJhdGlvbnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlzayhfVG90YWwpXERpc2sgUmVhZHMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnRQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHJlYWQgb3BlcmF0aW9ucyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrKF9Ub3RhbClcRGlzayBXcml0ZXMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnRQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHdyaXRlIG9wZXJhdGlvbnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlzayhfVG90YWwpXERpc2sgQnl0ZXMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXNQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHNwZWVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2soX1RvdGFsKVxEaXNrIFJlYWQgQnl0ZXMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXNQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHJlYWQgc3BlZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlzayhfVG90YWwpXERpc2sgV3JpdGUgQnl0ZXMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXNQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHdyaXRlIHNwZWVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2soX1RvdGFsKVxBdmcuIERpc2sgUXVldWUgTGVuZ3RoIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIGF2ZXJhZ2UgcXVldWUgbGVuZ3RoIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2soX1RvdGFsKVxBdmcuIERpc2sgUmVhZCBRdWV1ZSBMZW5ndGgiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgYXZlcmFnZSByZWFkIHF1ZXVlIGxlbmd0aCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrKF9Ub3RhbClcQXZnLiBEaXNrIFdyaXRlIFF1ZXVlIExlbmd0aCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhdmVyYWdlIHdyaXRlIHF1ZXVlIGxlbmd0aCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTG9naWNhbERpc2soX1RvdGFsKVwlIEZyZWUgU3BhY2UiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBmcmVlIHNwYWNlIChwZXJjZW50YWdlKSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTG9naWNhbERpc2soX1RvdGFsKVxGcmVlIE1lZ2FieXRlcyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBmcmVlIHNwYWNlIChNQikiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PC9QZXJmb3JtYW5jZUNvdW50ZXJzPjxXaW5kb3dzRXZlbnRMb2cgc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iPjxEYXRhU291cmNlIG5hbWU9IkFwcGxpY2F0aW9uISpbU3lzdGVtWyhMZXZlbCA9IDEgb3IgTGV2ZWwgPSAyKV1dIi8+PERhdGFTb3VyY2UgbmFtZT0iU2VjdXJpdHkhKltTeXN0ZW1bKExldmVsID0gMSBvciBMZXZlbCA9IDIpXSIvPjxEYXRhU291cmNlIG5hbWU9IlN5c3RlbSEqW1N5c3RlbVsoTGV2ZWwgPSAxIG9yIExldmVsID0gMildXSIvPjwvV2luZG93c0V2ZW50TG9nPjxNZXRyaWNzIHJlc291cmNlSWQ9Ii9zdWJzY3JpcHRpb25zL2UwMGQyYjNmLTNiOTQtNGRmYy1hZThlLWNhMzRjOGJhMWE5OS9yZXNvdXJjZUdyb3Vwcy94cGxhdFRlc3RHRXh0ZW5zaW9uOTU4OS9wcm92aWRlcnMvTWljcm9zb2Z0LkNvbXB1dGUvdmlydHVhbE1hY2hpbmVzL3hwbGF0dm1FeHQiPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxSCIvPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSIvPjwvTWV0cmljcz48L0RpYWdub3N0aWNNb25pdG9yQ29uZmlndXJhdGlvbj48L1dhZENmZz4=\",\"ladCfg\":null,\"storageAccount\":\"xplatstoragext6440\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"westus\",\r\n      \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9589/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n      \"name\": \"IaaSDiagnostics\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"forceUpdateTag\": \"extUpdateTag\",\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"westus\",\r\n      \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9589/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n      \"name\": \"VMAccessAgent\"\r\n    }\r\n  ],\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9589/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12684',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'bb6f807f-4b80-4474-a787-ff1f21f36f46_131263288293570904',
  'x-ms-request-id': 'f8fb9a39-eebd-4b1c-a8ae-a8df7c10d60a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14705',
  'x-ms-correlation-request-id': 'ce5c0c58-83fa-48fc-8c37-f4fe07cbedad',
  'x-ms-routing-request-id': 'WESTINDIA:20161223T085126Z:ce5c0c58-83fa-48fc-8c37-f4fe07cbedad',
  date: 'Fri, 23 Dec 2016 08:51:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/westus/publishers/Chef.Bootstrap.WindowsAzure/artifacttypes/vmextension/types/ChefClient/versions?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"11.10.4\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/westus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/11.10.4\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"11.12.0.0\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/westus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/11.12.0.0\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"11.18.6.2\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/westus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/11.18.6.2\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"1207.12.3.0\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/westus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/1207.12.3.0\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"1210.12.106.1000\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/westus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/1210.12.106.1000\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1392',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '234d1e30-12f3-45c5-b9b2-e55d55fe066a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14846',
  'x-ms-correlation-request-id': '73e4d510-e574-4c81-82b5-b3a386896619',
  'x-ms-routing-request-id': 'WESTINDIA:20161223T085127Z:73e4d510-e574-4c81-82b5-b3a386896619',
  date: 'Fri, 23 Dec 2016 08:51:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9589/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Chef.Bootstrap.WindowsAzure\",\r\n    \"type\": \"ChefClient\",\r\n    \"typeHandlerVersion\": \"1210.12\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"settings\": {\"client_rb\":\"log_level        :info\\nlog_location     \\\"c:/chef/logs\\\"\\nchef_server_url  \\\"https://api.opscode.com/organizations/orgname\\\"\\nvalidation_client_name \\t\\\"orgname-validator\\\"\",\"daemon\":\"service\"},\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9589/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient\",\r\n  \"name\": \"ChefClient\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '734',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/westus/operations/5f3c3435-8943-4d77-b67f-b1ba3515abea?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'bb6f807f-4b80-4474-a787-ff1f21f36f46_131263288293570904',
  'x-ms-request-id': '5f3c3435-8943-4d77-b67f-b1ba3515abea',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '8b08d231-13f9-481f-a003-0bbbe4fde145',
  'x-ms-routing-request-id': 'WESTINDIA:20161223T085129Z:8b08d231-13f9-481f-a003-0bbbe4fde145',
  date: 'Fri, 23 Dec 2016 08:51:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/westus/operations/5f3c3435-8943-4d77-b67f-b1ba3515abea?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-23T08:51:29.2616238+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"5f3c3435-8943-4d77-b67f-b1ba3515abea\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'bb6f807f-4b80-4474-a787-ff1f21f36f46_131263288293570904',
  'x-ms-request-id': 'f2e0455e-0bff-4d69-b35b-fb66427ae3d5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': 'bcc081ff-eeb2-4d06-95a4-03394f11271d',
  'x-ms-routing-request-id': 'WESTINDIA:20161223T085200Z:bcc081ff-eeb2-4d06-95a4-03394f11271d',
  date: 'Fri, 23 Dec 2016 08:52:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/westus/operations/5f3c3435-8943-4d77-b67f-b1ba3515abea?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-23T08:51:29.2616238+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"5f3c3435-8943-4d77-b67f-b1ba3515abea\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'bb6f807f-4b80-4474-a787-ff1f21f36f46_131263288293570904',
  'x-ms-request-id': 'cbee21ee-cee4-4d7f-bda7-aac6f237dfbb',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14836',
  'x-ms-correlation-request-id': 'ac68a600-be7d-48ae-8148-0ac105d7895e',
  'x-ms-routing-request-id': 'WESTINDIA:20161223T085232Z:ac68a600-be7d-48ae-8148-0ac105d7895e',
  date: 'Fri, 23 Dec 2016 08:52:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/westus/operations/5f3c3435-8943-4d77-b67f-b1ba3515abea?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-23T08:51:29.2616238+00:00\",\r\n  \"endTime\": \"2016-12-23T08:53:02.9099565+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"5f3c3435-8943-4d77-b67f-b1ba3515abea\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'bb6f807f-4b80-4474-a787-ff1f21f36f46_131263288293570904',
  'x-ms-request-id': 'e6fe8aa0-4ce1-4acc-8189-4fd0fd79e46f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14681',
  'x-ms-correlation-request-id': '30326309-7c65-4a13-962d-73f38d439b12',
  'x-ms-routing-request-id': 'WESTINDIA:20161223T085304Z:30326309-7c65-4a13-962d-73f38d439b12',
  date: 'Fri, 23 Dec 2016 08:53:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9589/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Chef.Bootstrap.WindowsAzure\",\r\n    \"type\": \"ChefClient\",\r\n    \"typeHandlerVersion\": \"1210.12\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"settings\": {\"client_rb\":\"log_level        :info\\nlog_location     \\\"c:/chef/logs\\\"\\nchef_server_url  \\\"https://api.opscode.com/organizations/orgname\\\"\\nvalidation_client_name \\t\\\"orgname-validator\\\"\",\"daemon\":\"service\"},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9589/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient\",\r\n  \"name\": \"ChefClient\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '735',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'bb6f807f-4b80-4474-a787-ff1f21f36f46_131263288293570904',
  'x-ms-request-id': '40bd8d1e-cec4-4a37-a8d7-79c651309ee2',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14918',
  'x-ms-correlation-request-id': 'd5df2734-f1d8-418a-bc5f-663f7b6f9bc6',
  'x-ms-routing-request-id': 'WESTINDIA:20161223T085305Z:d5df2734-f1d8-418a-bc5f-663f7b6f9bc6',
  date: 'Fri, 23 Dec 2016 08:53:05 GMT' });
 return result; }]];