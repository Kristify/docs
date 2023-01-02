# Configuration

Each shop contains a `config.lua` file, which configues important basics like the private key for refunds or the name.

!!! note
    You can use the [web-configurator](https://kristify.madefor.cc/configurator).
    It let's you configure Kristify, with a GUI!

Location: `<kristify>/data/config.lua`

---

## Fields

### Privatekey (`pkey`)

The privatekey is the key to your krist wallet. This will be used for refunding.
You should never share this with anyone, nor will Kristify.
The privatekey is only ever transferred to krist.dev *(the offical krist server)*.

### Krist name (`name`)

The krist name to use with the shop. Payments will be sent to this name.
You should not include `.kst`! A krist name can be purchased for **500kst**.
The ability to run a shop without a name will come later on.

??? example
    `cats`

### Monitor (`monSide`)

The side, or networkID of the monitor you want to display the shop on.

??? example
    `top`

### Tag line (`tagline`)

The tagline of your shop! This will be displayed under the title.

??? example
    `World's best shop!!!`

### Turtle Network ID (`self`)

When you connect your turtle to your chest network with a modem, there should come a network name in chat for each component.
You want the network name of the turtle.

??? example
    `turtle_163`

### Storage Chests (`storage`)

This is a table with network names of storage chests.
The network name of a chest should come in chat when you connect it with a modem.

??? example
    ```lua
    {
      "minecraft:chest_0",
      "minecraft:chest_1",
      "minecraft:chest_2"
    }
    ```

### Messages (`message`)

Messages is a table of messages to send, when a purchase is denied.

#### No metaname (`noMetaname`)

This message will be sent when the customer sent a payment without metaname.

??? example
    `message=No metaname found! Refunding.`

#### Nonexistant item (`nonexistantItem`)

This messge will be sent when the customer has sent payment to a item, which does not exist.

??? example
    `message=The item you requested is not available for purchase`

#### Not enogth money (`notEnogthMoney`)

This message will be sent when the customer has sent too little krist.

??? example
    `message=Insufficient amount of krist sent.`

#### Not enogth stock (`notEnogthStock`)

This message will be sent when the customer has sent more krist, than stock available.

??? example
    `message=We don't have that much stock!`

#### Change (`change`)

This message will be sent together with the change.

??? example
    `message=Here is your change! Thanks for using our shop.`

### Speakers (`speakers`)

Speakers is a table of speakers. It is in the format of network ids.

??? example
    ```lua
    {
        "speaker_0",
        "speaker_1"
    }
    ```

### Sounds (`sounds`)

Sounds is a table of different sounds that will be played at different events.

#### On startup (`started`)

This sound will be played when the shop is ready to receive purchases.

??? example
    `minecraft:block.note_block.harp`

#### On purchase (`purchase`)

This sound will be played when the shop received a valid purchase.

??? example
    `minecraft:entity.villager.yes`

#### On error (`error`)

This sound will be played when the shop received a invalid purchase.

??? example
    `minecraft:block.anvil.land`

### Webhooks (`webhooks`)

Webhooks is a table with webhooks.
There are currently three different webhook types:  

* discord-modern  
* discord  
* googleChat  

Along with the type you also have to supply a URL.

Please see the example below:

!!! example
    ```lua
    webhooks = {
      {
        type = "discord-modern",
        url = "https://discord.com/api/webhook/blablabla-token-blablalbalb"
      }
    }
    ```
