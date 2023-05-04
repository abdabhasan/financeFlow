import { Brand } from "../components";
import {
  Hero,
  BuildCryptoPortfolio,
  Rewards,
  SecondRewards,
  Explore,
  Reviews,
  GetStarted,
  News,
  DownloadApp,
} from "../sections";
const Home = () => {
  return (
    <div>
      <Hero />
      <Brand />
      <BuildCryptoPortfolio />
      <Rewards />
      <SecondRewards />
      <Explore />
      <Reviews />
      <GetStarted />
      <News />
      <DownloadApp />
    </div>
  );
};

export default Home;
