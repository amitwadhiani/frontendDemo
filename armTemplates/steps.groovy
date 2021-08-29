

$AZURE_CLIENT_ID='b4d2bb90-2231-4223-b868-06fa0936e99b'
$AZURE_CLIENT_SECRET='3.cgel7yJ-9_Dd9zJ6~vM6Oy0p1019HqD-'
$AZURE_TENANT_ID='bf84df2f-5750-4359-b152-6caccdb92439'
$SUBSCRIPTION_ID='3bf7a28f-d361-46d7-b93b-e5ced4d6191c'
$resourceGroup='amitRG-dev'



az login --service-principal --username ${AZURE_CLIENT_ID} --password "${AZURE_CLIENT_SECRET}" --tenant ${AZURE_TENANT_ID} --subscription ${SUBSCRIPTION_ID}

az group create -l eastus2 -n ${resourceGroup} --subscription ${SUBSCRIPTION_ID}


az deployment group create --resource-group ${resourceGroup}  --name ${deploymentName} --template-file azureDeploy.json --parameters dev.parameters.json --parameters dockerRegistryPassword={$dockerPassword}
dockerRegistryPassword