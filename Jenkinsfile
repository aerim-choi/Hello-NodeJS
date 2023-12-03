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
                expression { BRANCH_NAME == 'main' }
            }
            steps {
                script {
                    sh 'docker build -t my-node-app .'
                    sh "docker run -p 80:80 -d --name $CONTAINER_NAME my-node-app"
                }

                // 'docker run' 명령어를 실행하고 종료 코드 확인
                // def runCommand = "docker run -p 80:80 -d --name $CONTAINER_NAME my-node-app"
                // def resultCode = sh(script: runCommand, returnStatus: true)

                // // 종료 코드가 0이 아니면 실패로 처리
                // if (resultCode != 0) {
                //     error "Container failed to start. Exit code: ${resultCode}"
                // }
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
