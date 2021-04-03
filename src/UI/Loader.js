import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: cyan;
`;

function Loading() {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={150} />
    </div>
  );
}

export default Loading;
