# Configuration

Each shop contains a `config.lua` file, which configures important basics like the private key for refunds or the name.

!!! note
    You can use the [web-configurator](https://kristify.madefor.cc/configurator).
    It lets you configure Kristify, with a GUI!

Location: `<kristify>/data/config.lua`

---

## Fields

### Privatekey (`pkey`)

The privatekey is the key to your krist wallet. This will be used for refunding.
You should never share this with anyone, nor will Kristify.
The privatekey is only ever transferred to krist.dev *(the official krist server)*.

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

#### Nonexistent item (`nonexistantItem`)

This message will be sent when the customer has sent payment to an item, which does not exist.

??? example
    `message=The item you requested is not available for purchase`

#### Not enough money (`notEnoughMoney`)

This message will be sent when the customer has sent too little krist.

??? example
    `message=Insufficient amount of krist sent.`

#### Not enough stock (`notEnoughStock`)

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

This sound will be played when the shop received an invalid purchase.

??? example
    `minecraft:block.anvil.land`

### Redstone Pulses (`redstonePulse`)

Kristify can do redstone pulses to make for example a redstone lamp flash.
The redstone pulse field should have a table that contains `delay` and a tablearray that contains sides.

!!! example
    ```lua
    redstonePulse = {
      delay = 3,
      sides = { "right" }
    }
    ```

### Webhooks (`webhooks`)

Webhooks is a table with webhooks.
There are currently three different webhook types:  

* discord-modern  
* discord  
* googleChat  

Along with the type you also have to supply a URL, and on events it will fire.

The available events are:

* purchase
* invalid

The purchase event is triggered on a purchase, while invalid is triggered on an invalid purchase.

Please see the example below:

!!! example
    ```lua
    webhooks = {
      {
        type = "discord-modern",
        URL = "https://discord.com/api/webhook/blablabla-token-blablalbalb",
        events = {"purchase", "invalid"}
      }
    }
    ```

### ShopSync (`shopSync`)

[ShopSync](https://p.sc3.io/7Ae4KxgzAM) is a protocol for broadcasting shop information & prices over modems developed by 6_4.

#### Enabled (`enabled`)

Boolean value that enables the broadcast of ShopSync data.

??? example
`true`

#### Modem (`modem`)

The modem that ShopSync data will broadcast over. If left blank, it will attempt to automatically find an ender or wireless modem.

??? example
`"right"`

#### Owner (`owner`)

The owner of the shop, typically a username.

??? example
`"Yemmel"`

#### Multiple Shops (`multiShop`)

If multiple shops are ran off of the same computer, this should be an integer value counting up from 1. Otherwise, this should be left nil.

??? example
`nil`

#### Location (`location`)

The location of the shop, described in coordinates and/or text.

##### Broadcast Location (`broadcastLocation`)

Boolean value that determines whether location information is broadcast.

??? example
`true`

##### Coordinates (`coordinates`)

The coordinates of the shop. If left at defaults, and `broadcastLocation` is true, GPS may be used to determine the location of the shop.

??? example
`{ 138, 75, 248 }`

##### Description (`description`)

A text description of the shop's location.

??? example
`"North of spawn, just outside Immediate Spawn Area."`

##### Dimension (`dimension`)

Dimension the shop is located in. It can be one of the following:
* overworld
* nether
* end

??? example
`"overworld"`
