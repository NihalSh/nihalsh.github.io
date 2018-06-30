---
path: "/blog/setup-ntp-client"
date: "2018-06-24"
title: "Setup NTP Client"
---

Clock synchronization is important in any distributed system. Desynchronization can cause multiple issues which can vary in severity based on the context. NTP stands for Network Time Protocol which is a protocol for clock synchronization over the network. For the purposes of this article, I am going to configure `ntpd` on `Centos` to use `Google Public NTP`.

### Setup and Configuration for Clients
1. Install `ntpd`
```bash
sudo yum install ntp ntpdate ntp-doc -y
```
2. Configure `ntpd` to start automatically on boot
```bash
sudo systemctl enable ntpd
```
3. To use `Google Public NTP` add the following lines to `/etc/ntp.conf`
```
server time1.google.com iburst
server time2.google.com iburst
server time3.google.com iburst
server time4.google.com iburst
```
```bash
sudo vi /etc/ntp.conf
```
4. Start `ntpd`
```bash
sudo systemctl start ntpd
```
5. Check status of `ntpd`
```bash
sudo systemctl status ntpd
```

### What's next?
Check out the references given below for more extensive information. If you don't use Linux, you can go to `Google Public NTP Guides` which provides additional information for configuring clients other than Linux. If you want to fine tune `ntpd` further to your liking, check out the `man page` by running the following command `man ntp` on your Linux terminal.

##### References:
[Clock Synchronization](https://en.wikipedia.org/wiki/Clock_synchronization) \
[Clock Drift](https://en.wikipedia.org/wiki/Clock_drift) \
[Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) \
[Google Public NTP](https://developers.google.com/time/) \
[Leap Second](https://en.wikipedia.org/wiki/Leap_second) \
[Leap Smear](https://developers.google.com/time/smear) \
[Google Public NTP Guides](https://developers.google.com/time/guides) \
[Centos](https://centos.org/)