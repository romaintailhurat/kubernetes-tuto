# Kubernetes tuto

https://kubernetes.io/docs/tutorials/stateless-application/hello-minikube/#before-you-begin

## Basically

Run your app from a Docker image :

```bash
docker build -t hello-node:v1 .
kubectl run hello-node --image=hello-node:v1 --port=8080
```

View the relative deployment and pod :

```bash
kubectl get deployments
kubectl get pods
```

Check events on the cluster and configuration :

```bash
kubectl get events
kubectl config view
```

To access the app, make the pod visible by creating a service :

```bash
kubectl expose deployment hello-node --type=LoadBalancer
kubectl get services
```

Service is pending, make it accessible with minikube :

```bash
minikube service hello-node
```

Update and redeploy the app :

```bash
docker build -t hello-node:v2 .
kubectl set image deployment/hello-node hello-node=hello-node:v2
minikube service hello-node
```

Clean up with:

```bash
kubectl delete service hello-node
kubectl delete deployment hello-node
# optional
minikube stop
eval $(minikube docker-env -u)
# even more optional
minikube delete
```