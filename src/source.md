#Kali linux code:  
*sudo apt update && sudo apt upgrade -y*  

*sudo crontab -e*  
```0 3 * * * root /usr/bin/apt update && /usr/bin/apt upgrade -y```  

*sudo apt install unattended-upgrades*  
*sudo dpkg-reconfigure unattended-upgrades*  

#Fedora Workstation 42:  
*sudo dnf upgrade -y*  

*sudo crontab -e*  
```0 3 * * * root /usr/bin/dnf upgrade -y```  

sudo dnf install dnf-automatic  
sudo systemctl enable --now dnf-automatic.timer  


#Arch linux code:  
*sudo pacman -Syu --noconfirm*  

*cd /etc/systemd/system*  
*nano pacman-update.service*  
```##nano  
[Unit]  
Description=Update Pacman  

[Service]  
Type=oneshot  
ExecStart=/usr/bin/pacman -Syu --noconfirm  
```  

*nano pacman-update.timer*  
```##nano  
[Unit]  
Description=Run Pacman update weekly  

[Timer]  
OnCalendar=weekly  
Persistent=true  

[Install]  
WantedBy=timers.target  
```
*sudo systemctl enable --now pacman-update.timer*  