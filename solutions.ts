function multiplyValue(value: number, multiplier?: number): number {
  if (typeof multiplier === "undefined") {
    return value * 2;
  }
  return value * multiplier;
}

function processInput(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value) {
      return "Active";
    } else return "Inactive";
  }
}

type Cor = readonly [number, number, string];
function formatCoordinate(obj: Cor): string {
  return "Location: " + obj[2] + " (" + obj[0] + ", " + obj[1] + ")";
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number) {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
}


function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails() {
    return "Employee: " + this.name + ", Base Salary: " + this.baseSalary;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo() {
    return "Manager of " + this.department + ": " + this.name;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  if (age >= 18) {
    return new Promise((res) => {
      setTimeout(() => {
        res("Access Granted");
      }, 1000);
    });
  } else {
    throw new Error("Access Denied: Must be 18 or older");
  }
}
