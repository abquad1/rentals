'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { roomTypes } from '../pages/api/Data'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from "sonner"


// Define the validation schema
const formSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  address: z.string().min(1, 'Address is required').min(5, 'Address must be at least 5 characters'),
  unit: z.string().min(1, 'Unit number is required'),
  city: z.string().min(1, 'Please select a city'),
  state: z.string().min(1, 'Please select a state'),
  room: z.string().min(1, 'Please select a room type'),
  price: z.string().min(1, 'Price is required'),
  description: z.string().min(1, 'Description is required').min(10, 'Description must be at least 10 characters'),
  photos: z.array(z.instanceof(File)).length(1, 'Only one photo is required').max(10, 'Maximum 10 photos allowed'),
})

type FormValues = z.infer<typeof formSchema>

function FormTable() {
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      address: '',
      unit: '',
      city: '',
      state: '',
      room: '',
      price: '',
      description: '',
      photos: [],
    },
  })

  const onSubmit = async (data: FormValues) => {
    try {
      // Create FormData to handle file uploads
      const formData = new FormData()
      
      // Append text fields
      formData.append('name', data.name)
      formData.append('address', data.address)
      formData.append('unit', data.unit.toString())
      formData.append('city', data.city)
      formData.append('state', data.state)
      formData.append('room', data.room)
      formData.append('price', data.price.toString())
      formData.append('description', data.description)
      
      // Append photos
      data.photos.forEach((photo, index) => {
        formData.append(`photos`, photo)
      })

      const response = await fetch('http://localhost:5000/v1/property', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const result = await response.json()
      
      toast.success(
         'Property added successfully'
      )
      
      // Reset form and clear file input
      form.reset()
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      
      toast.error(
        'Failed to add property. Please try again.'
       )
    }
  }

  return (
    <div className="mt-8">
      <div className="m-auto w-[80%] pt-10 shadow-lg shadow-gray-400 min-h-full pb-6">
        <h1 className="text-center text-[#F4511E] font-bold text-2xl">
          Add a new property
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Input Fields Grid */}
            <div className="sm:block md:grid grid-cols-3 m-auto w-[82%] gap-5 mt-4">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col md:mt-0 sm:mt-4">
                    <FormLabel className="text-lg font-semibold">
                      Name<span className="text-[#F4511E] font-bold ml-2">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Name"
                        className="bg-gray-50 rounded-md border border-gray-200 w-[90%]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address Field */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="flex flex-col md:mt-0 sm:mt-4">
                    <FormLabel className="text-lg font-semibold">
                      Address<span className="text-[#F4511E] font-bold ml-2">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Address"
                        className="bg-gray-50 rounded-md border border-gray-200 w-[90%]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Unit Number Field */}
              <FormField
                control={form.control}
                name="unit"
                render={({ field }) => (
                  <FormItem className="flex flex-col md:mt-0 sm:mt-4">
                    <FormLabel className="text-lg font-semibold">
                      Unit Number<span className="text-[#F4511E] font-bold ml-2">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Unit"
                        className="bg-gray-50 rounded-md border border-gray-200 w-[90%]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* City Field */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex flex-col md:mt-0 sm:mt-4">
                    <FormLabel className="text-lg font-semibold">
                      City<span className="text-[#F4511E] font-bold ml-2">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter City"
                        className="bg-gray-50 rounded-md border border-gray-200 w-[90%]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* State Field */}
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="flex flex-col md:mt-0 sm:mt-4">
                    <FormLabel className="text-lg font-semibold">
                      State<span className="text-[#F4511E] font-bold ml-2">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter State"
                        className="bg-gray-50 rounded-md border border-gray-200 w-[90%]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Room Type Field */}
              <FormField
                control={form.control}
                name="room"
                render={({ field }) => (
                  <FormItem className="flex flex-col md:mt-0 sm:mt-4">
                    <FormLabel className="text-lg font-semibold">
                      Room Type<span className="text-[#F4511E] font-bold ml-2">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-50 rounded-md border border-gray-200 w-[90%]">
                          <SelectValue placeholder="Select Room Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roomTypes.map((roomType) => (
                          <SelectItem key={roomType} value={roomType}>
                            {roomType}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price Field */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="flex flex-col md:mt-0 sm:mt-4">
                    <FormLabel className="text-lg font-semibold">
                      Price<span className="text-[#F4511E] font-bold ml-2">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Price"
                        className="bg-gray-50 rounded-md border border-gray-200 w-[90%]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Description Field */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex flex-col sm:mt-4 m-auto w-[82%] md:mt-8">
                  <FormLabel className="text-lg font-semibold">
                    Description<span className="text-[#F4511E] font-bold ml-2">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter description"
                      className="bg-gray-50 rounded-md border border-gray-200 md:w-[97%] sm:w-[90%] min-h-[150px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Photo Upload Field */}
            <FormField
              control={form.control}
              name="photos"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem className="flex flex-col sm:mt-4 m-auto w-[82%] md:mt-8">
                  <FormLabel className="text-lg font-semibold">
                    Property Photos<span className="text-[#F4511E] font-bold ml-2">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      <Input
                        type="file"
                        accept="image/*"
                        className="bg-gray-50 rounded-md border border-gray-200 md:w-[97%] sm:w-[90%] cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#F4511E] file:text-white hover:file:bg-[#F4511E]/90"
                        onChange={(e) => {
                          const files = Array.from(e.target.files || [])
                          onChange(files)
                        }}
                        {...field}
                      />
                      
                      {/* Photo Preview */}
                      {value && value.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-[97%] sm:w-[90%]">
                          {value.map((file, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-32 object-cover rounded-md border-2 border-gray-200"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const newFiles = value.filter((_, i) => i !== index)
                                  onChange(newFiles)
                                }}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                              >
                                ×
                              </button>
                              <p className="text-xs text-gray-600 mt-1 truncate">
                                {file.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {value && value.length > 0 && (
                        <p className="text-sm text-gray-600">
                          {value.length} photo{value.length !== 1 ? 's' : ''} selected (max 10)
                        </p>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="md:w-[45%] m-auto sm:w-[80%]">
              <Button
                type="submit"
                className="w-full bg-[#F4511E] rounded-md text-white text-xl font-bold h-[50px] hover:bg-[#F4511E]/90"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Adding...' : 'Add New Property'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default FormTable