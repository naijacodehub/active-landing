import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../shadcn/ui/form";
import { Input } from "../shadcn/ui/input";
import Button from "../formComponents/Button";
import { Textarea } from "../shadcn/ui/textarea";

import {
  HireTalentFormData,
  defaultHireTalentForm,
  hireTalentFormSchema,
} from "../../constants/validators/HireTalent.validator";

import { useEffect, useState } from "react";
import useHireTalent from "../../hooks/useHireTalent";

export default function HireTalentForm() {
  const form = useForm<HireTalentFormData>({
    resolver: zodResolver(hireTalentFormSchema),
    defaultValues: defaultHireTalentForm,
  });

  const { submitHireTalent, loading } = useHireTalent(form.watch());

  const [selectedTechStacks, setSelectedTechStacks] = useState<Set<string>>(
    new Set()
  );
  const [selectedRoles, setSelectedRoles] = useState<Set<string>>(new Set());

  useEffect(() => {
    form.setValue("technologyStack", Array.from(selectedTechStacks));
  }, [selectedTechStacks, form]);

  useEffect(() => {
    form.setValue("role", Array.from(selectedRoles));
  }, [selectedRoles, form]);

  const onSubmit = async () => {
    await submitHireTalent();

    form.reset();
    setSelectedTechStacks(new Set());
    setSelectedRoles(new Set());
  };

  return (
    <div className="max-w-[43rem] mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 xmobile:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telephoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Telephone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="xmobile:col-span-2">
              <FormField
                control={form.control}
                name="jobDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        rows={7}
                        placeholder="Project Description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" loading={loading} className="px-8 h-10">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
