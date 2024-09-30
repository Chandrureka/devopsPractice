pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                   
                    sh 'docker build -t chandru47/mynextapp:latest .'
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    
                    sh 'echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin'
                    
                    sh 'docker push chandru47/mynextapp:latest'
                }
            }
        }
       stage('Deploy to EC2') {
            steps {
                script {
                    // Use the SSH key stored in Jenkins credentials
                    withCredentials([sshUserPrivateKey(credentialsId: 'ssh_key', keyFileVariable: 'SSH_KEY')]) {
                    // SSH into EC2 instance using the private key
                      sh """
                      ssh -i \$SSH_KEY -o StrictHostKeyChecking=no ubuntu@ec2-52-7-190-93.compute-1.amazonaws.com <<'EOF'
                      echo "hello from EC2"
                      docker pull chandru47/mynextapp:latest
                      docker run -d --name mynextapp -p 80:3000 -e NEXTAUTH_URL=http://52.7.190.93:3000/ chandru47/mynextapp:latest
                      EOF
                      """
                    }

                }
            }
        }
    }
}
