import "./Token.scss";

const Token = ({
  tokenImg,
  tokenName,
  code,
  description,
  marketCap,
  volume,
  website,
}) => {
  return (
    <>
      <tr className="token">
        <td className="token-name">
          <img src={tokenImg} alt="Img" />
          <h4>{tokenName}</h4>
          <p>{code}</p>
        </td>
        <td className="description">
          <p>{description}</p>
        </td>
        <td className="market-cap">
          <p>{marketCap}</p>
        </td>
        <td className="volume">
          <p>{volume}</p>
        </td>
        <td className="website">
          <p>
            <a href="#">visit website</a>
          </p>
        </td>
      </tr>
    </>
  );
};

export default Token;
