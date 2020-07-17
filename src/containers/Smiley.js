import React, { memo, useEffect } from "react";
import SmilesDrawer from "smiles-drawer";
import ButtonBase from "@material-ui/core/ButtonBase";

function SmileImage({
  smiles,
  smilesDrawer,
  smallMoleculeId,
  onClick,
  repaint = true,
  ...props
}) {
  useEffect(() => {
    SmilesDrawer.parse(
      smiles,
      tree => {
        smilesDrawer.draw(tree, `${smallMoleculeId}${smiles}`, "light", false);
      },
      () => {}
    );
  }, [smiles, repaint]);
  return (
    <canvas
      key={`${smallMoleculeId}${smiles}`}
      id={`${smallMoleculeId}${smiles}`}
    />
  );
}

export default memo(SmileImage);
