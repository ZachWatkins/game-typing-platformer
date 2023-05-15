#!/bin/bash

# This script is used as a reference for CLI image manipulation with the ImageMagick library.

# Create the Player image from the source image.
convert assets/snorlax.png -trim +repage assets/player.png

