sudo docker stop nktech || true
sudo docker rm nktech || true
sudo docker rmi -f nktech-myapp || true
sudo rm -rf ./NKTech
sudo git clone https://github.com/Narendrakaduru/NKTech.git
cd NKTech
sudo chmod +x ./redeploy.sh
sudo ./redeploy.sh