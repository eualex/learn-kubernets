> Command to run requests tests
```bash
kubectl run -it fortio --rm --image=fortio/fortio -- load -qps 800 -t 120s -c 70 "http://api-service"
```