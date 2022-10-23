declare const $: ClusterScript;

interface ClusterScript {
  state: StateProxy;
  log: (v: any) => void;
  onUpdate: (callback: (deltaTime: number) => void) => void;
  subNode: (name: string) => SubNode;
  onGrab: (callback: (isGrab: boolean) => void) => void;
  onUse: (callback: (isDown: boolean) => void) => void;
  getPosition: () => Vector3;
  getRotation: () => Quaternion;
  setRotation: (pos: Quaternion) => void;
  setStateCompat: (
    target: CompatStateTarget,
    key: string,
    value: CompatSendable,
  ) => void;
}

type StateProxy = Record<string, Sendable | undefined>;
type CompatStateTarget = "this" | "owner";
type CompatSendable = boolean | number | Vector2 | Vector3;

type Sendable =
  | boolean
  | number
  | string
  | Vector2
  | Vector3
  | Quaternion
  | null;

interface SubNode {
  getPosition: () => Vector3;
  setPosition: (pos: Vector3) => void;
  getRotation: () => Quaternion;
  setRotation: (pos: Quaternion) => void;
}

declare class Vector3 {
  constructor();
  constructor(x: number, y: number, z: number);
  x: number;
  y: number;
  z: number;
  set(x: number, y: number, z: number): void;
  add(v: Vector3): Vector3;
  clone(): Vector3;
  addScalar(s: number): Vector3;
}

declare class Vector2 {
  constructor();
  constructor(x: number, y: number);
  x: number;
  y: number;
}

declare class Quaternion {
  constructor();
  constructor(x: number, y: number, z: number, w: number);
  x: number;
  y: number;
  z: number;
  w: number;
  set(x: number, y: number, z: number, w: number): void;
  setFromEulerAngles: (v: Vector3) => Quaternion;
}
