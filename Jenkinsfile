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
   stage('docker build/push') {
     sh """ npm install -g @angular/cli@latest && npm install --global yarn && yarn install """
     docker.withRegistry('https://index.docker.io/v1/', '998ffb10-3286-4316-9fad-ef16a26aaa52') {
       def app = docker.build("amit0wadhiani/angularrealworldfrontend:${commit_id}", '.').push()
     }
   }
}
