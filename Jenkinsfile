pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "bharathm746/my-app:latest"
    K8S_NAMESPACE = "my-namespace"
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/bharathmurugan/Devops_MiniProject'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build("${DOCKER_IMAGE}")
        }
      }
    }

    stage('Push to DockerHub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          sh "docker login -u $USERNAME -p $PASSWORD"
          sh "docker push ${DOCKER_IMAGE}"
        }
      }
    }

    stage('Deploy to Kubernetes using Helm') {
      steps {
        sh "helm upgrade --install node-app ./helm-chart --namespace ${K8S_NAMESPACE} --create-namespace"
      }
    }
  }
}
