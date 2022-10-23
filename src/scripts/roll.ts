import { node } from "../constant";

(() => {
  const cube = $.subNode(node.Cube);
  const updateCubeRotation = () => {
    const angle = ($.state.angle as number | undefined) ?? 0;
    const rotation = new Quaternion().setFromEulerAngles(
      new Vector3(angle, angle * 1.5, angle * 2),
    );
    cube.setRotation(rotation);
    $.state.angle = angle + 2;
  };
  $.onUpdate((_deltaTime) => {
    if ($.state.isGrab) {
      updateCubeRotation();
    }
  });
  $.onGrab((isGrab) => {
    $.state.isGrab = isGrab;
  });
})();
