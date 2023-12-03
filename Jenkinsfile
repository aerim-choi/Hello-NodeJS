pipeline {
    agent any

    environment {
        CONTAINER_NAME = "my-node-app-container"
    }

    stages {
        stage('Checkout') {
            steps {
                // 소스 코드 체크아웃
                checkout scm
            }
        }

        stage('Build and Run Container') {
            when {
                expression { BRANCH_NAME == 'main' || BRANCH_NAME == 'develop' }
            }
            steps {
                script {
                    catchError(buildResult: 'FAILURE') {
                        sh 'docker build -t my-node-app .'
                        sh "docker run -p 80:80 -d --name $CONTAINER_NAME my-node-app"
                    }
                }
            }
        }
    }

    post {
        success {
            // 빌드 성공 시 실행되는 작업
            echo 'Build successful! Container is running.'
        }
        failure {
            // 빌드 실패 시 실행되는 작업
            echo 'Build failed. Notify the team.'
        }
    }
}
