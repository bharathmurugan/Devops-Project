# 🛠️ DevOps Final Project: CI/CD Pipeline for React Todo List App

## 📌 Project Overview

This project demonstrates a complete DevOps pipeline that automates the build, test, and deployment of a **React-based Todo List Web Application** using the following tools:

- **Jenkins** for Continuous Integration & Continuous Deployment (CI/CD)
- **Docker** for containerization
- **Kubernetes** for orchestration and deployment
- **GitHub** as the version control system

> 🚀 Goal: Automate the development-to-deployment lifecycle using modern DevOps practices.

---

## 🧰 Tech Stack

| Tool         | Purpose                                 |
|--------------|-----------------------------------------|
| React        | Frontend Web Application                |
| Jenkins      | CI/CD Automation                        |
| Docker       | Containerization                        |
| Kubernetes   | Container Orchestration                 |
| GitHub       | Version Control & Code Repository       |
| Node.js      | JavaScript runtime for build/test       |

---

## 📁 Project Structure

```bash
📦 todo-list-react-devops/
├── Jenkinsfile
├── Dockerfile
├── kubernetes/
│   ├── deployment.yaml
│   └── service.yaml
├── src/
│   └── ... (React App Code)
├── public/
│   └── ...
├── package.json
└── README.md
🔁 CI/CD Pipeline Overview
1. Build Stage
Jenkins clones the GitHub repo.

Installs dependencies using npm install.

2. Test Stage
Executes npm test to validate the build.

3. Docker Stage
Builds a Docker image using Dockerfile.

Pushes the image to Docker Hub.

4. Deploy Stage
Deploys the app to Kubernetes using kubectl apply -f deployment.yaml.

⚙️ Prerequisites
Make sure the following are installed/configured:

Jenkins server with required plugins (Docker, Kubernetes CLI)

Docker & Docker Hub account

Kubernetes cluster (Minikube or cloud provider)

GitHub repository

🧪 Running Locally
Clone the project:

bash
Copy
Edit
git clone https://github.com/<your-username>/todo-list-react-devops.git
cd todo-list-react-devops
Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
npm start
📦 Docker Build & Push
bash
Copy
Edit
docker build -t <your-dockerhub-username>/todo-list-app .
docker push <your-dockerhub-username>/todo-list-app
☸️ Kubernetes Deployment
bash
Copy
Edit
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
kubectl get all
Access the service using the NodePort or LoadBalancer exposed.

🔄 Jenkins Job Configuration
Pipeline type: Declarative Pipeline

Source: GitHub (Webhooks or Poll SCM)

Credentials: Docker Hub & GitHub


