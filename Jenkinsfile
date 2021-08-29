node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
  //  stage('test') {
  //    nodejs(nodeJSInstallationName: 'nodejs') {
  //      sh 'npm install -g @angular/cli@latest && npm install --global yarn && yarn install'
  //     //  sh 'npm test'
  //    }
  //  }
   stage('Docker build/push') {
    //  nodejs(nodeJSInstallationName: 'nodejs') {
    //    sh """ npm install -g @angular/cli@latest && npm install --global yarn && yarn install """
    //   //  sh 'npm test'
    //  }
     
     docker.withRegistry('https://index.docker.io/v1/', '998ffb10-3286-4316-9fad-ef16a26aaa52') {
       def app = docker.build("amit0wadhiani/angularrealworldfrontend:${env.BUILD_NUMBER}", '.').push()
     }
     docker.withRegistry('https://index.docker.io/v1/', '998ffb10-3286-4316-9fad-ef16a26aaa52') {
       def app = docker.build("amit0wadhiani/angularrealworldfrontend:${commit_id}", '.').push()
     }
     
   }
   stage('Deploy to App Service') {
     withCredentials([
        azureServicePrincipal(service-principal) {
        sh """     
            AZURE_TENANT_ID='bf84df2f-5750-4359-b152-6caccdb92439'
            SUBSCRIPTION_ID='3bf7a28f-d361-46d7-b93b-e5ced4d6191c'
            resourceGroup='amitRG-dev'
            az login --service-principal --username ${AZURE_CLIENT_ID} --password ${AZURE_CLIENT_SECRET} --tenant \$AZURE_TENANT_ID --subscription \$SUBSCRIPTION_ID
            az group create -l eastus2 -n \$resourceGroup --subscription \$SUBSCRIPTION_ID
            az deployment group create --resource-group \$resourceGroup  --name \$deploymentName --template-file azureDeploy.json --parameters dev.parameters.json --parameters dockerRegistryPassword=${dockerPassword} --parameters linuxFxVersion="DOCKER|amit0wadhiani/angularrealworldfrontend:${env.BUILD_NUMBER}"
          """
        }
     ])
   }
}
