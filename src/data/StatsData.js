import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
    {
      icon: (
        <GiEarthAmerica
        color={`
             #047bf1
          `}
        />
      ),
      title: "Over 100 Destinations",
      desc: "Travel to over 100 unique places across the globe",
    },
    {
      icon: (
        <MdAirplanemodeActive
          color={`
            #f3a82e
          `}
        />
      ),
      title: "1+ Million Trips Made",
      desc: "Over 1 million trips made in the past year",
    },
    {
      icon: (
        <MdTimer
          color={`
            #f34f2e
          `}
        />
      ),
      title: "Best Deals",
      desc: "We offer the best prices and discounts",
    },
    {
      icon: (
        <FaMoneyCheck
          color={`
            #3af576
          `}
        />
      ),
      title: "Over 100 Destinations",
      desc: "Travel to over 100 unique places across the globe",
    },
  ]