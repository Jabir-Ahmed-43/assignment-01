# How to Combine Union and Intersection Types in TypeScript

## Introduction

In TypeScript, union (`|`) and intersection (`&`) types help us organize data cleanly. The union sign (`|`) means a value can be **one type OR another type**. The intersection sign (`&`) means an object must combine all properties of **both types together**. Using both at the same time stops us from repeating the same properties in many places.

## Practical Example: Combining Course and User Roles

Let us look at a practical example using our user and course data. Suppose every user in our platform has basic information like `id` and `name`. However, a user's role can only be `"Admin"`, `"Editor"`, or `"Subscriber"`, and they might also own a `Course`.

We can use a union (`|`) for the fixed roles and an intersection (`&`) to combine user details with course information.

```typescript
// 1. Union type (|) for specific allowed roles
type UserRole = "Admin" | "Editor" | "Subscriber";

// 2. Base types
type BaseUser = {
  id: number;
  name: string;
  role: UserRole;
};

type CourseInfo = {
  title: string;
  students: number;
  isPublished: boolean;
};

// 3. Combining Intersection (&) and Union (|)
type InstructorProfile = BaseUser & CourseInfo;

const instructor: InstructorProfile = {
  id: 1,
  name: "Rakib",
  role: "Admin", // Must match the UserRole union (|)
  title: "TypeScript Mastery",
  students: 120,
  isPublished: true,
};

function showInstructor(profile: InstructorProfile) {
  console.log(profile.name + " teaches " + profile.title);
}
```

In this code, `UserRole` uses `|` so nobody can write a wrong role name. Then `InstructorProfile` uses `&` to merge `BaseUser` and `CourseInfo` together into one single type.

## Conclusion

Combining union and intersection types makes our TypeScript code clean, short, and reusable. We can restrict values using `|` and merge multiple object shapes using `&` to build strong data models easily.
