import { C01Hangar } from './C01Hangar'
import { C02FlightPlan } from './C02FlightPlan'
import { C03Takeoff } from './C03Takeoff'
import { C04Cockpit } from './C04Cockpit'
import { C05Landing } from './C05Landing'
import { C06WhyFly } from './C06WhyFly'
import { C07Frontier } from './C07Frontier'
import { C08BoardingPass } from './C08BoardingPass'
import { C09FinalApproach } from './C09FinalApproach'

export function Story() {
  return (
    <main className="relative z-10">
      <C01Hangar />
      <C02FlightPlan />
      <C03Takeoff />
      <C04Cockpit />
      <C05Landing />
      <C06WhyFly />
      <C07Frontier />
      <C08BoardingPass />
      <C09FinalApproach />
    </main>
  )
}
