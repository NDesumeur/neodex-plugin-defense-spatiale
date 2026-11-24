# Défense spatiale (Space Defence)

A tower defence game: waves of enemies follow a route to your station, and you place towers along the path to stop them. 30 maps, 9 towers with three levels, 12 kinds of enemies and 4 difficulties; hold out for 50 waves to win the medal.

*Version française : [README.md](README.md)*

## Controls

- **1 to 9** or click a tower in the list: select it; then click a free cell to build it.
- **Shift + click**: place several in a row.
- **Click a placed tower**: see its damage and range, **upgrade** it (**U**, or **U** / **I** to pick the level 3 specialisation) or **sell** it (**V**, 70% of what it cost).
- **Right-click** or **Escape**: cancel; **Space**: pause; **Speed ×2** speeds the game up.
- **Enter**: launch the next wave; **FULLSCREEN**: the game and its towers over the whole screen.
- The route has glowing edges and golden arrows moving the way the enemies go, up to the station.
- **Launch the wave**: sends the next wave without waiting. The earlier you call it, the more crystals you earn (2 per second ahead).

## The towers

- **Laser**: fires fast at a single target.
- **Plasma cannon**: shells that explode over an area.
- **Frost**: slows every enemy around it.
- **Tesla**: lightning that bounces from one enemy to the next.
- **Missiles**: long range, aims at the toughest enemy.
- **Rail**: an instant shot that goes through the whole line.
- **Acid**: a poison that ignores armour.
- **Nova**: burns everything passing around it.
- **Relay**: does not fire, but boosts nearby towers (+25% damage, more at level 3).

Each tower can be upgraded twice. Level 2 gives more damage, range and fire rate; at **level 3** you pick **one of two specialisations**, and the other is lost for that tower (left button or **U**, right button or **I**):

| Tower | Specialisation 1 | Specialisation 2 |
|---|---|---|
| Laser | Piercing beam: hits the 3 leading enemies | Rapid laser: fires three times faster |
| Plasma cannon | Heavy mortar: huge explosion, slower | Fragmentation: the shell bursts into 4 small bombs |
| Frost | Absolute zero: one pulse in three freezes in place | Hailstorm: less cold, much more damage |
| Tesla | Storm: the lightning bounces over 10 enemies | Overload: 3 targets, huge damage |
| Missiles | Salvo: 3 missiles at 3 targets | Warhead: a missile that explodes over an area |
| Rail | Antimatter: devastating, slower shot | Twin rail: two beams with every shot |
| Acid | Corrosion: enemies hit take +30% damage | Toxic cloud: a large poisoned area |
| Nova | Supernova: wider and stronger | Pulsar: burns non-stop, up close |
| Relay | Amplifier: +90% damage around it | Accelerator: nearby towers fire much faster |

A specialised tower wears a small light (gold for the first, cyan for the second). Every tower counts the **damage it has dealt** (shown when you click it), and the end of the game tells you your **best tower**.

## The enemies

Drones, fast scouts, swarms, **clusters** and **hives** that burst into smaller enemies, armoured **battleships** that release drones, **shield bearers**, very fast **drills**, regenerating **jellyfish**, **ghosts** immune to slowing, and **titans**. Every 10 waves a **mothership** arrives. Enemies get tougher every wave; armour reduces the damage of each shot.

## How it goes

- You start with crystals (♦) and lives (depending on difficulty). Each destroyed enemy earns crystals, and so does each finished wave.
- Each enemy reaching the station costs a life (several for a titan or a mothership). At zero: "The station has fallen".
- Between waves, a 15-second countdown gives you time to build.
- After **wave 50**, you win the medal for the chosen difficulty; the game then continues so you can beat your record.

## Difficulties and maps

- **Easy** (30 lives), **Normal** (20), **Hard** (15) and **Nightmare** (10): tougher, faster enemies and fewer crystals.
- 30 maps, each with its own route (spiral, zigzag, double stream, triple entry, maze…). All are open from the start; in the list, each star is a medal won on that map, and the wave record is kept per map and per difficulty.

## Data and sync

Your records and medals are stored by NeoDex, backed up and synced between your PCs when sync is on.

## Install

In NeoDex: **NeoStore → Discover → Défense spatiale → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
