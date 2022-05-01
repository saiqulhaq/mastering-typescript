function printObject(obj: string | number) {
  console.log(`obj = ${obj}`);
}
printObject(1);
printObject("string value");
// printObject([1232]); error

// TYPE GUARD
function addWithTypeGuard(arg1: string | number, arg2: string | number) {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    // both are numbers
    return arg1 + arg2;
  }
  return arg1.toString() + arg2.toString();
}

console.log(
  addWithTypeGuard(1, 2),
  addWithTypeGuard("2", 2),
  addWithTypeGuard(2, "2"),
  addWithTypeGuard("2", "2")
);

// TYPE ALIAS
type StringOrNumber = string | number;
function addWithTypeAlias(arg1: StringOrNumber, arg2: StringOrNumber) {
  return arg1.toString() + arg2.toString();
}

console.log(
  addWithTypeAlias(1, 2),
  addWithTypeAlias("2", 2),
  addWithTypeAlias(2, "2"),
  addWithTypeAlias("2", "2")
);

// ENUM
enum DoorState {
  Open,
  Closed,
}
function checkDoorState(state: DoorState) {
  console.log(`enum value is : ${state}`);
  switch (state) {
    case DoorState.Open:
      console.log(`Door is open`);
      break;
    case DoorState.Closed:
      console.log(`Door is closed`);
      break;
  }
}

checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

enum GroupBooking {
  Small = 2,
  Big = 8,
}

function isBigGroup(partySize: GroupBooking) {
  if (partySize >= GroupBooking.Big) {
    return true;
  }

  return false;
}
console.log(isBigGroup(GroupBooking.Small), isBigGroup(GroupBooking.Big));

// optional chaining
function printNestedOptionalChain(obj: any) {
  if (obj?.nestedProperty?.name) {
    console.log(`name = ${obj.nestedProperty.name}`);
  } else {
    console.log(`name not found or undefined`);
  }
}
printNestedOptionalChain({ nestedProperty: { name: "hello" } });
printNestedOptionalChain({ nestedProperty: { namE: "hello" } });
printNestedOptionalChain({
  nestedProperty: {
    name: null,
  },
});

printNestedOptionalChain({
  nestedProperty: {
    name: undefined,
  },
});

// Nullish coalescing
// check that a particular variable is not either null or undefined before using it, as this can lead to errors
function nullishCheck(a: number | undefined | null) {
  console.log(`a : ${a ?? `undefined or null`}`);
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);

function testNullOperands(a: number, b: number | null | undefined) {
  console.log(`result ${a + (b ?? 0)}`);
}
testNullOperands(1, 2);
testNullOperands(1, null);

// Definite assignment
// for unit test usually
var globalString: string;
console.log(`globalString = ${globalString!}`);
setGlobalString("this string is set");
console.log(`globalString = ${globalString!}`);
function setGlobalString(value: string) {
  globalString = value;
}

// Uknown type
// type-safe version of `any`
let u: unknown = "an unknown";
u = 1;
let aNumber2: number;
aNumber2 = <number>u;
console.log(aNumber2);

// Never
function alwaysThrows(): never {
    throw new Error("this will always throw");
    return -1;
}

// alwaysThrows()

enum AnEnum {
  FIRST,
  SECOND,
}

// this code is not valid because it doesnt have `case AnEnum.SECOND`
// function getEnumValue(enumValue: AnEnum): string {
//     switch (enumValue) {
//         case AnEnum.FIRST: return "First Case";
//     }
//     let returnValue: never = enumValue;
//     return returnValue;
// }
// getEnumValue(AnEnum.FIRST)
// getEnumValue(AnEnum.SECOND)

function getEnumValue(enumValue: AnEnum): string {
  switch (enumValue) {
    case AnEnum.FIRST:
      return "First Case";
    case AnEnum.SECOND:
      return "Second Case";
  }
  let returnValue: never = enumValue;
  return returnValue;
}
console.log(getEnumValue(AnEnum.FIRST), getEnumValue(AnEnum.SECOND));

// Tuples
// type that has a finite number of unnamed properties
let tuple1: [string, boolean];
tuple1 = ["test", true];
// tuple1 = ["test"]; is invalid
tuple1[0] = "test"
tuple1[1] = false 
console.log(tuple1)

let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["test"];
console.log(`tupleOptional[0] : ${tupleOptional[0]}`);
console.log(`tupleOptional[1] : ${tupleOptional[1]}`);

// Tuples and spread syntax

let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];

// -----------
// Functions