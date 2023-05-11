import { Token } from "../../components";
import token1 from "../../assets/tokens/icon1.png";
import token2 from "../../assets/tokens/icon2.png";
import token3 from "../../assets/tokens/icon3.png";
import token4 from "../../assets/tokens/icon4.png";
import "./Tokens.scss";
const Tokens = () => {
  return (
    <section className="tokens section__padding">
      <div className="tokens__container">
        <div className="tokens__container_heading">
          <h1>Tokens</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat. Scelerisque
          </p>
        </div>
        <div className="tokens__container_table">
          <div class="table-responsive">
            <table className="table w-100">
              <tr className="table-head">
                <th>Name</th>
                <th>Description</th>
                <th>Market cap</th>
                <th>volume</th>
                <th>website</th>
              </tr>
              <Token
                tokenImg={token1}
                tokenName={"Bitcoin"}
                code={"btc"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                }
                marketCap={"$252,844,036,453 USD"}
                volume={"$30,504,879,301 USD"}
              />
              <Token
                tokenImg={token2}
                tokenName={"Ethereum"}
                code={"eth"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                }
                marketCap={"$252,844,036,453 USD"}
                volume={"$30,504,879,301 USD"}
              />
              <Token
                tokenImg={token3}
                tokenName={"Litecoin"}
                code={"ltc"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                }
                marketCap={"$252,844,036,453 USD"}
                volume={"$30,504,879,301 USD"}
              />
              <Token
                tokenImg={token4}
                tokenName={"TRON"}
                code={"trx"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                }
                marketCap={"$252,844,036,453 USD"}
                volume={"$30,504,879,301 USD"}
              />
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokens;
