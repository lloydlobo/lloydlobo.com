---
title: "Mausam weather app"
date: "2020-03-16T05:35:07.322Z"
coverImage: "assets/projects/mausam/cover.jpg"
excerpt: "The client for this application approached me because they were looking to create a product that allows drivers to quickly connect with mechanics when dealing with car problems. They also were loooking to enable hobbyist and mechanics unassociated with any particular shop the opportunity to gig-work and manage their own time. I was able to effectively create user personas, competitive audits, sketches, wireframes and a final prototype and send over final assets to an engineer in around three months."
ogImage:
  url: "assets/projects/mausam/cover.jpg"
projectType: "personal"
repository: "https://github.com/lloydlobo/mausam"
live: "https://dictionary-web-app-vert.vercel.app"
---

Mausam is a CLI tool that displays the current weather conditions of your location as a desktop notification.

![mausam](https://github.com/lloydlobo/mausam/blob/master/assets/demo.gif)

## Features

- Cross-platform
- Arbitrary shell commands are supported.
- Constant feedback about the weather updates (..and TODO: current forecasts).

## Setup

### API

You may get a API key from [OpenWeatherMap](https://openweathermap.org/api) for
free for a generous request rate a day.

After subscribing add it to the `.env` file as `<your API key>` without `<`/`>`.

## Installation

### From Source

```sh
git clone https://github.com/lloydlobo/mausam.git
cd mausam
cargo build --release
cargo install --path .
```

## Usage

### Introduction

Mausam is a a weather update desktop notifier made with Rust.
By default, the temperature unit in the response is in Kelvin, but it is converted to Celsius before being displayed in the notification.

### Running Mausam

#### Using Your Current Location

To display the weather conditions of your current location, simply run the following command in your terminal:

#### Running Mausam Periodically with Cron

Schedule cron jobs to run on a time interval for the current user.
More information: <https://crontab.guru/>.

##### Prerequisites

Before you can run Mausam periodically with cron, you must meet the following requirements:

- Have `crontab` installed on your system
- Have Mausam installed on your system, which can be done using `cargo`, the Rust's toolchain. After installation, the binary will be stored in `/home/<YOUR_USER_NAME>/.cargo/bin/` by default.
- Place the `.env` file in the `path/to/mausam` directory, as this file holds the secret `WEATHER_API_KEY`.

### Terminal output with API response

```sh
$ mausam paris
{
  "coord": {
    "lon": 2.3488,
    "lat": 48.8534
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 283.18,
    "feels_like": 282.12,
    "temp_min": 282.58,
    "temp_max": 283.92,
    "pressure": 1031,
    "humidity": 72
  },
  "visibility": 10000,
  "wind": {
    "speed": 6.17,
    "deg": 260
  },
  "clouds": {
    "all": 100
  },
  "dt": 1675343032,
  "sys": {
    "type": 2,
    "id": 2041230,
    "country": "FR",
    "sunrise": 1675322401,
    "sunset": 1675356505
  },
  "timezone": 3600,
  "id": 2988507,
  "name": "Paris",
  "cod": 200
}
```

## Origin of the name

The name `mausam` was chosen in reference to the borrowed name
from Persian `موسم` (mousem), and from Arabic `مَوْسِم`(mawsim). which means weather.
