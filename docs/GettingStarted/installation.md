# Installation

To get started, run the following command on a **Turtle**:

```shell
wget run https://kristify.madefor.cc/installer.lua
```
  
This should open a GUI and guide you through the installing progress of Kristify.  
> 👉 Note: If you get the error `..Forbidden..`, the reason for that could be because of GitHub's rate limiting. If this is the case, **wait for about 1h or hope you play on a server that provides a git token.**  
  
---

After the installation is done, you still need to setup a few things:  

1.   Setup physical stuff *(description below)*  
2.   Configuration *(See [docs](https://kristify.madefor.cc/d_configuration/))*  
3.   Add products *(See [docs](https://kristify.madefor.cc/e_product-spec/))*  

Step **2** and **3** will be explained in their corresponding docs page *(see links above)*. The physical part will be explained here.  
  
---

You should now have a Turtle with Kristify installed on it. Great! Now its time to place the following things. Kristify **needs** the following parts:  

 - **Monitor** *(Minimum 5x3 large)*  
 - **Chests** *(Connect as much as you need)*  
 - **Turtle**  
  
After connecting them to the network, write down which name they have *(e.g. "monitor_0")*.  
In addition, you can also connect **speakers** for sound support!  

It doesnt matter how you place all those components. Just make sure they are connected.  

**However**, The Turtle running Kristify should be **only accessable to the shop owner**, and not the customers!
*Or else bad things can happen!*  
  
---

This was step 1. Easy, right? But before you are done, you now have to generate the configuration and your products!
  
The config.lua and products.lua files can be now placed in `<kristify_installation/data/`. And thats it!  
