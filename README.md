# Abandoned Park - a plugin for OpenRCT2
- Do you like abandoned theme parks?
- Did you enjoy the map Rotting Heights?
- Are you looking for a challenging fixer upper?

This could be the plugin for you!

## Installation and Usage
- Download the AbandonPark.js file.
- Move the file into the plugin folder for your openrct2 installation
- Select AbandonPark from the map drop down menu

## Recommended for best results
- Ensure cheat menu is enabled in options.
  - Open the Object Selection window from the cheat menu (Hold the cheat menu button for the drop down)
  - Have the following Scenery Groups or Individual Objects (Using advanced mode) selected:
  - Shrubs and Ornaments
    - Shrubs x 2
    - Bush ('rct2.tsh3', 'rct2.tsh5', 'rct2.tsh0')
  - Jungle Themeing
    - Bush x 4
  - Spooky Themeing
    - Dead Tree x 3
  - Africa Themeing
    - Low Bush

## Customization
- Open AbandonPark.js file in a text editor.
  - Change the values listed under //Probability Scale in order to increase/decrease the effects of the plugin.
  - Change the iteration value to determine how many destructive loops you wish the plugin to run through.
  - Change the maxDPT value to alter how many paths and wall/roof scenery elements can be destroyed per tile per iteration.
  - Change landOwnedOnly to false if you want the plugin to effect surrounding land. Will leaves paths alone (experimental)

## Possible Future Improvements
- Things that could be done now.
  - Add gui for easier customization.
  - Fade the paint on rides and scenery. (?)
- Things that may be added once the plugin API supports them.
  - Automatically add unavailable objects.
  - Add trash to footpath.

![Diamond Heights 2021-03-02 01-19-40](https://user-images.githubusercontent.com/62322762/109519206-228f5500-7aff-11eb-8fac-c368f6e4f02f.png)
![Alton Towers 2021-03-02 03-06-36](https://user-images.githubusercontent.com/62322762/109524219-5ae56200-7b04-11eb-8b32-436e67bd0a48.png)
![Six Flags Magic Mountain 2021-03-02 01-41-45](https://user-images.githubusercontent.com/62322762/109519193-20c59180-7aff-11eb-957d-ecbe3cd83aff.png)
