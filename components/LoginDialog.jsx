'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';

import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';

export function LoginDialog({ triggerButton }) {
  const [loginSelected, setLoginSelected] = useState(false); // State for toggling login/signup
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleLoginSelected = () => {
    setLoginSelected(true);
    setShowPassword(false);
  };
  const toggleSignUpSelected = () => {
    setLoginSelected(false);
    setShowPassword(false);
  };
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent className='rounded-xl p-8 w-1/2 h-fit'>
        <DialogHeader>
          <DialogTitle>
            {loginSelected ? (
              <>
                <div className='flex flex-row items-center w-full my-6 justify-between text-3xl font-normal'>
                  {/* Login Button */}
                  <div
                    className={`relative focus:outline-none ${
                      loginSelected ? 'text-white' : 'text-transparent'
                    }`}
                  >
                    Login
                    <div
                      className={`absolute -bottom-2 left-0 h-1 gradient-bg transition-all duration-300 ${
                        loginSelected ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>

                  {/* Sign Up Button */}
                  <div
                    className={`relative focus:outline-none ${
                      loginSelected ? 'text-white' : 'text-transparent'
                    }`}
                  >
                    Welcome back!
                    <div
                      className={`absolute -bottom-2 h-1 gradient-bg transition-all duration-300 ${
                        loginSelected ? 'w-0 right-0' : 'w-full right-0'
                      }`}
                    ></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='flex flex-row items-center w-full my-6 justify-between text-3xl font-normal'>
                  {/* Login Button */}
                  <div
                    className={`relative focus:outline-none ${
                      !loginSelected ? 'text-white' : 'text-transparent'
                    }`}
                  >
                    One step away...
                    <div
                      className={`absolute -bottom-2 left-0 h-1 gradient-bg transition-all duration-300 ${
                        loginSelected ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>

                  {/* Sign Up Button */}
                  <div
                    className={`relative focus:outline-none ${
                      !loginSelected ? 'text-white' : 'text-transparent'
                    }`}
                  >
                    Sign Up
                    <div
                      className={`absolute -bottom-2 h-1 gradient-bg transition-all duration-300 ${
                        loginSelected ? 'w-0 right-0' : 'w-full right-0'
                      }`}
                    ></div>
                  </div>
                </div>
              </>
            )}
          </DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-2'>
          {loginSelected ? (
            <>
              {/* Login Form */}
              <Label htmlFor='email' className='text-md'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='@'
                className='h-12 focus:border-white border-white/50'
              />
              <Label htmlFor='password' className='text-md'>
                Password
              </Label>
              <div className='relative'>
                {!password && (
                  <span className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                    <Image
                      src='/images/key-icon.svg'
                      width={15}
                      height={15}
                      className=''
                      alt='Key Icon'
                    />
                  </span>
                )}
                <Input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className='h-12 focus:border-white border-white/50'
                  onChange={handlePasswordChange}
                />
                <Button
                  type='icon'
                  className='absolute inset-y-1 right-0 pr-4 flex items-center hover:bg-transparent bg-transparent text-white'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOpenIcon className='h-5 w-5' />
                  ) : (
                    <EyeNoneIcon className='h-5 w-5' />
                  )}
                </Button>
              </div>
              <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-2'>
                  <Checkbox className='border-white/50' id='remember' />
                  <Label htmlFor='remember' className='text-sm text-white/50'>
                    Remember me
                  </Label>
                </div>
                <Button variant='link' className='text-sm text-white/50'>
                  Forgot Password?
                </Button>
              </div>
              <Button
                className='text-lg text-white mt-8 mb-2 h-12 gradient-bg'
                variant='secondary'
              >
                Login
              </Button>
              <div className='flex flex-row justify-center text-sm items-center'>
                New to reviral?
                <Button
                  variant='link'
                  onClick={toggleSignUpSelected}
                  className=' p-2 text-gradient'
                >
                  Sign Up
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* Sign Up Form */}
              <Label htmlFor='email' className='text-md'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='@'
                className='h-12 focus:border-white border-white/50'
              />
              <Label htmlFor='password' className='text-md'>
                Create Password
              </Label>
              <div className='relative'>
                {!password && (
                  <span className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                    <Image
                      src='/images/key-icon.svg'
                      width={15}
                      height={15}
                      className=''
                      alt='Key Icon'
                    />
                  </span>
                )}
                <Input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className='h-12 focus:border-white border-white/50'
                  onChange={handlePasswordChange}
                />
              </div>
              <Label htmlFor='password' className='text-md'>
                Confirm Password
              </Label>
              <div className='relative'>
                {!confirmPassword && (
                  <span className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                    <Image
                      src='/images/key-icon.svg'
                      width={15}
                      height={15}
                      className=''
                      alt='Key Icon'
                    />
                  </span>
                )}
                <Input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className='h-12 focus:border-white border-white/50'
                  onChange={handleConfirmPasswordChange}
                />
                <Button
                  type='icon'
                  className='absolute inset-y-1 right-0 pr-4 flex items-center hover:bg-transparent bg-transparent text-white'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOpenIcon className='h-5 w-5' />
                  ) : (
                    <EyeNoneIcon className='h-5 w-5' />
                  )}
                </Button>
              </div>
              <Button
                className='text-lg text-white mt-8 mb-2 h-12 gradient-bg'
                variant='secondary'
              >
                Sign Up
              </Button>
              <div className='flex flex-row justify-center text-sm items-center'>
                Already have an account?
                <Button
                  variant='link'
                  onClick={toggleLoginSelected}
                  className=' p-2 text-gradient'
                >
                  Login
                </Button>
              </div>
            </>
          )}

          <div className='flex flex-row justify-center items-center w-full mb-2 gap-2'>
            <Separator
              orientation='horizontal'
              className='bg-[#1e1e1e] w-[200px]'
            />
            <p className='text-md text-[#1e1e1e]'>OR</p>
            <Separator
              orientation='horizontal'
              className='bg-[#1e1e1e]  w-[200px]'
            />
          </div>

          <Button className='text-lg h-12' variant='secondary'>
            <div className='flex flex-row gap-4'>
              <Image
                src='/icons/google-logo.svg'
                alt='Google Icon'
                width={24}
                height={24}
              />
              {loginSelected ? 'Continue with Google' : 'Sign Up with Google'}
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
