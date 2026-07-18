"use client";

import { useFormContext } from "react-hook-form";

import FormInput from "@/features/memory-companion/components/FromInput";
import { CreateCompanionInput } from "@/features/memory-companion/components/schemas/create-companion";

export default function BasicInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateCompanionInput>();

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-stone-900">
          Basic Information
        </h2>

        <p className="mt-2 text-stone-500">
          Tell us about the person whose memories you want to preserve.
        </p>
      </div>

      {/* Form */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <FormInput
            label="Full Name"
            name="full_name"
            register={register}
          />

          {errors.full_name && (
            <p className="mt-2 text-sm text-red-500">
              {errors.full_name.message}
            </p>
          )}
        </div>

        {/* Nickname */}
        <FormInput
          label="Nickname"
          name="nickname"
          register={register}
        />

        {/* Relationship */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Relationship
          </label>

          <select
            {...register("relationship")}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
          >
            <option value="">Select</option>
            <option value="Mother">Mother</option>
            <option value="Father">Father</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
            <option value="Friend">Friend</option>
            <option value="Grandmother">Grandmother</option>
            <option value="Grandfather">Grandfather</option>
            <option value="Partner">Partner</option>
            <option value="Mentor">Mentor</option>
            <option value="Other">Other</option>
          </select>

          {errors.relationship && (
            <p className="text-sm text-red-500">
              {errors.relationship.message}
            </p>
          )}
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Gender
          </label>

          <select
            {...register("gender")}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">
              Prefer not to say
            </option>
          </select>
        </div>

        {/* Birth Date */}
        <FormInput
          label="Birth Date"
          name="birth_date"
          type="date"
          register={register}
        />

        {/* Passing Date */}
        <FormInput
          label="Date of Passing"
          name="passing_date"
          type="date"
          register={register}
        />

        {/* Occupation */}
        <FormInput
          label="Occupation"
          name="occupation"
          register={register}
        />

        {/* Country */}
        <FormInput
          label="Country"
          name="country"
          register={register}
        />

        {/* City */}
        <FormInput
          label="City"
          name="city"
          register={register}
        />

        {/* Languages */}
        <FormInput
          label="Languages"
          name="languages"
          register={register}
        />
      </div>
    </div>
  );
}