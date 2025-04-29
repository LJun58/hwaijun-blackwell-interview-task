import { RegisterFormSchema, LoginFormSchema } from "@/app/lib/validation";

const MOCK_USER = {
  email: "test@hotmail.com",
  password: "123456789",
  firstName: "Test First1",
  lastName: "Test Last1",
  mobile: "12345678",
  country: "Malaysia",
};

export async function registerUser(state, formData) {
  const validatedFields = RegisterFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    mobile: formData.get("mobile"),
    country: formData.get("country"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, mobile, country, password } =
    validatedFields.data;

  // simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    user: { firstName, lastName, email, mobile, country },
  };
}

export async function loginUser(state, formData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // mock user login validation
  if (email !== MOCK_USER.email || password !== MOCK_USER.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  const { firstName, lastName, mobile, country } = MOCK_USER;
  return {
    success: true,
    user: { firstName, lastName, email, mobile, country },
  };
}
