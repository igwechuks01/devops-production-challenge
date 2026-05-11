pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                git 'https://github.com/igwechuks01/devops-production-challenge.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('app') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('app') {
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('app') {
                    sh 'docker build -t devops-challenge-app .'
                }
            }
        }

    }
}
