"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { error } from "console";

export default function Contact() {
  const t = useTranslations("ContactMe");
  const { toast } = useToast();
  const formSchema = z.object({
    emailAddress: z.string().email({ message: t("errorEmail") }),
    name: z.string().min(2, { message: t("errorName") }),
    message: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      name: "",
      message: "",
    },
  });
  const key = process.env.NEXT_PUBLIC_FORM;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    axios
      .post(`https://getform.io/f/${key}`, values, {
        headers: { Accept: "application/json" },
      })
      .then(() =>
        toast({
          variant: "sucess",
          title: t("sucessTitle"),
          description: t("sucessDescription"),
        }),
      )
      .catch(() =>
        toast({
          variant: "error",
          title: t("errorTitle"),
          description: t("erroDescription"),
        }),
      );
    form.reset();
  };
  return (
    <CardContent>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md: flex flex-col space-y-2 md:space-y-4 lg:space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={t("InputName")} type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("InputEmail")}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder={t("InputMessage")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="uppercase" type="submit">
            {t("btn")}
          </Button>
        </form>
      </Form>
    </CardContent>
  );
}
