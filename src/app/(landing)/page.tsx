'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  RobotOutlined,
  ThunderboltOutlined,
  FieldTimeOutlined,
  TrophyOutlined,
  TeamOutlined,
  SettingOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Automate Repetitive Tasks`,
      description: `Let our bot handle the mundane, time-consuming activities while you focus on strategic decisions.`,
      icon: <RobotOutlined />,
    },
    {
      heading: `Optimize Resource Management`,
      description: `Efficiently allocate and utilize your resources to maximize your empire's growth.`,
      icon: <ThunderboltOutlined />,
    },
    {
      heading: `24/7 Active Gameplay`,
      description: `Stay competitive even when you're offline, ensuring your empire never sleeps.`,
      icon: <FieldTimeOutlined />,
    },
    {
      heading: `Competitive Edge`,
      description: `Gain an advantage over manual players and climb the leaderboards faster.`,
      icon: <TrophyOutlined />,
    },
    {
      heading: `Customizable Strategies`,
      description: `Tailor the bot's behavior to match your unique playstyle and goals.`,
      icon: <SettingOutlined />,
    },
    {
      heading: `Balanced Gameplay`,
      description: `Enjoy the game's social aspects while the bot handles the grind.`,
      icon: <TeamOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Alex Thompson`,
      designation: `Casual Travian Player`,
      content: `The Travian bot has completely transformed my gaming experience. I can now enjoy the strategic aspects without sacrificing my work-life balance.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Sarah Chen`,
      designation: `Competitive Travian Enthusiast`,
      content: `As a top-ranked player, this bot has been a game-changer. It's like having a tireless assistant that keeps my empire running smoothly 24/7.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Mike Rodriguez`,
      designation: `Returning Travian Player`,
      content: `I thought I had to give up Travian due to time constraints, but this bot allowed me to return and compete at a high level. It's incredible!`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emma Watson`,
      designation: `Student and Part-time Gamer`,
      content: `Balancing studies and gaming was tough until I found this bot. Now I can focus on my education without falling behind in Travian.`,
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      name: `David Park`,
      designation: `Working Professional`,
      content: `The Travian bot has given me the best of both worlds - a successful career and a thriving Travian empire. It's a must-have for busy gamers.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: `Lisa Novak`,
      designation: `Alliance Leader`,
      content: `Leading an alliance is so much easier with this bot. I can coordinate strategies more effectively and keep our group competitive.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Novice Conqueror`,
      description: `Perfect for casual players looking to enhance their gameplay`,
      monthly: 9,
      yearly: 89,
      features: [`Basic automation`, `Resource management`, `24/7 activity`],
    },
    {
      title: `Empire Builder`,
      description: `Ideal for dedicated players aiming for the top`,
      monthly: 19,
      yearly: 189,
      features: [
        `Advanced automation`,
        `Custom strategies`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Legendary Ruler`,
      description: `For the most competitive players and alliances`,
      monthly: 29,
      yearly: 289,
      features: [
        `Elite automation`,
        `Multi-account management`,
        `Strategy consulting`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `Is using the Travian bot allowed by the game?`,
      answer: `While automation tools are not officially endorsed, our bot is designed to mimic human-like behavior and operate within the game's terms of service. However, we recommend using it responsibly and at your own discretion.`,
    },
    {
      question: `How does the bot work without compromising my account security?`,
      answer: `Our bot uses secure API integration and never requires your login credentials. It operates on our servers, ensuring your account details remain private and protected.`,
    },
    {
      question: `Can I customize the bot's behavior to match my playstyle?`,
      answer: `Absolutely! Our bot offers extensive customization options, allowing you to set priorities, define strategies, and tailor its actions to align with your unique gameplay preferences.`,
    },
    {
      question: `What happens if the game updates or changes?`,
      answer: `We have a dedicated team that constantly monitors Travian for updates and changes. Our bot is regularly updated to ensure compatibility and optimal performance with the latest version of the game.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Sign Up`,
      description: `Create an account and link it to your Travian game profile securely.`,
    },
    {
      heading: `Customize`,
      description: `Set your preferences and strategies to align with your gameplay goals.`,
    },
    {
      heading: `Activate`,
      description: `Turn on the bot and watch as it begins to optimize your empire.`,
    },
    {
      heading: `Dominate`,
      description: `Enjoy the benefits of automated gameplay while you focus on high-level strategy.`,
    },
  ]

  const painPoints = [
    {
      emoji: `⏰`,
      title: `Constant time pressure to manage your empire`,
    },
    {
      emoji: `😴`,
      title: `Losing progress while you sleep or work`,
    },
    {
      emoji: `😩`,
      title: `Burnout from repetitive, time-consuming tasks`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Conquer Travian Without Sacrificing Your Life`}
        subtitle={`Automate your empire, dominate the leaderboards, and reclaim your time with our intelligent Travian bot.`}
        buttonText={`Start Conquering`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/pFvzWK-travianbot-W8xK`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy conquerors`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Featured on`} />
      <LandingPainPoints
        title={`The Struggle of Every Travian Player: 68% Spend Over 20 Hours Weekly`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`From Overwhelmed to Unstoppable: Your Journey to Travian Mastery`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Unleash the Full Potential of Your Travian Empire`}
        subtitle={`Discover how our bot transforms your gameplay, giving you the edge to rise above the competition.`}
        features={features}
      />
      <LandingTestimonials
        title={`Real Players, Real Results: Success Stories from the Battlefield`}
        subtitle={`See how players like you have revolutionized their Travian experience and achieved their empire-building dreams.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Choose Your Path to Travian Domination`}
        subtitle={`Select the perfect plan to conquer your goals and rule the Travian world.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Your Questions Answered`}
        subtitle={`Everything you need to know about taking your Travian gameplay to the next level.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Revolutionize Your Travian Experience?`}
        subtitle={`Join thousands of players who have already transformed their gameplay. Your unstoppable empire awaits!`}
        buttonText={`Start Your Conquest Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
