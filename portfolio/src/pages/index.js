import React from "react"

import '../components/fonts.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutPost from '../components/aboutPost'

import ReelCinema from '../posts/commercial-projects/reel-cinema/reel-cinema'
import Beautify from '../posts/commercial-projects/beautify/beautify'
import MotivateMe from '../posts/commercial-projects/motivate-me/motivate-me'
import RiverRun from '../posts/commercial-projects/river-run/river-run'
import Crossbow from '../posts/commercial-projects/crossbow/crossbow'
import JumpAR from '../posts/commercial-projects/jump-ar/jump-ar'
import RaceStart2 from '../posts/commercial-projects/race-start-2/race-start-2'
import SideWheel2 from '../posts/commercial-projects/side-wheel-2/side-wheel-2'

import BlueFlameEngine from '../posts/personal-projects/blue-flame-engine/blue-flame-engine'
import VaultTechEngine from '../posts/personal-projects/vault-tech-engine/vault-tech-engine'
import HacknSlash from '../posts/personal-projects/hackn-slash/hackn-slash'
import TheExiled from '../posts/personal-projects/the-exiled/the-exiled'
import HeroesOfNewcastle from '../posts/personal-projects/heroes-of-newcastle/heroes-of-newcastle'

import BuggedDungeon from '../posts/game-jam-projects/bugged-dungeon/bugged-dungeon'
import DIWhyArmourGuy from '../posts/game-jam-projects/d-i-why-armour-guy/d-i-why-armour-guy'
import PounceHug from '../posts/game-jam-projects/pounce-hug/pounce-hug'
import NeonFever from '../posts/game-jam-projects/neon-fever/neon-fever'
import CavedIn from '../posts/game-jam-projects/caved-in/caved-in'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <AboutPost />
    
    <h1 style={{ fontFamily: 'AvenirNextLTProBold', color: 'white' }}>Commercial Projects</h1>
    <ReelCinema />
    <Beautify />
    <MotivateMe />
    <RiverRun />
    <Crossbow />
    <JumpAR />
    <SideWheel2 />
    <RaceStart2 />

    <h1 style={{ fontFamily: 'AvenirNextLTProBold', color: 'white' }}>Personal Projects</h1>
    <BlueFlameEngine />
    <TheExiled />
    <HacknSlash />
    <VaultTechEngine />
    <HeroesOfNewcastle />

    <h1 style={{ fontFamily: 'AvenirNextLTProBold', color: 'white' }}>Game Jam Projects</h1>
    <BuggedDungeon />
    <DIWhyArmourGuy />
    <PounceHug />
    <NeonFever />
    <CavedIn />

  </Layout>
)

export default IndexPage