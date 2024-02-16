import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../shadcn/ui/form';
import { Input } from '../shadcn/ui/input';
import Button from '../formComponents/Button';
import { Textarea } from '../shadcn/ui/textarea';

import {
  OutsourceProjectFormData,
  defaultOutsourceProjectForm,
  outsourceProjectFormSchema,
} from '../../constants/validators/Outsource.validator';
import useOutsource from '../../hooks/useOutsource';

export default function OutsourceProjectForm() {
  const form = useForm<OutsourceProjectFormData>({
    resolver: zodResolver(outsourceProjectFormSchema),
    defaultValues: defaultOutsourceProjectForm,
  });

  const { handleSubmit, loading } = useOutsource(form.getValues());

  function onSubmit() {
    console.log('submitted');

    handleSubmit().then(() => {
      form.reset();

      form.setValue('projectBudgetMax', 0);
      form.setValue('projectBudgetMin', 0);
    });
  }

  return (
    <div className='max-w-[43rem] w-full mx-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <div className='grid grid-cols-1 xmobile:grid-cols-2 gap-6 xmobile:gap-y-5 xmobile:gap-x-4 mobile:gap-y-8 mobile:gap-x-5'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Enter Name' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='telephoneNumber'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                    <Input
                      type='tel'
                      placeholder='Telephone Number'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='xmobile:col-span-2'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder='Email Address' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='xmobile:col-span-2'>
              <FormLabel>Project Details</FormLabel>

              <div className='mt-3 grid grid-cols-1 gap-6 xmobile:gap-y-5 mobile:gap-y-8'>
                <FormField
                  control={form.control}
                  name='projectName'
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        <Input placeholder='Project Name' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='projectDate'
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        <Input
                          type='date'
                          placeholder='Expected start date'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Expected start date</FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mt-6 xmobile:mt-y-5 mobile:mt-y-8 flex items-center justify-between space-x-3 lgMobile:space-x-5'>
                <div className='flex-1'>
                  <FormField
                    control={form.control}
                    name='projectBudgetMin'
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Username</FormLabel> */}
                        <FormControl>
                          <Input
                            type='number'
                            min={0}
                            placeholder='Min'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <hr className='w-6 lgMobile:w-10 border dark:border-gray-500' />

                <div className='flex-1'>
                  <FormField
                    control={form.control}
                    name='projectBudgetMax'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type='number'
                            min={0}
                            placeholder='Max'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className='xmobile:col-span-2'>
              <FormField
                control={form.control}
                name='projectDescription'
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Textarea
                        rows={7}
                        placeholder='Project Description'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='flex justify-center laptop:justify-end'>
            <Button loading={loading} className='px-8 h-10' type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
