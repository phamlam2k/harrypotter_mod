import React, { useState, useEffect } from "react";
import { TextField, Button, CircularProgress, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useOTPController } from "../controllers/otpcontroller";

interface OTPInputProps {
  onClose: () => void;
  email: string;
  onSuccessRegister: () => void;  // Callback for when OTP is successfully verified
  onResetSuccessRegister: () => void;  // Callback for resetting the success state
}

const OTPInput: React.FC<OTPInputProps> = ({ onClose, email, onSuccessRegister, onResetSuccessRegister }) => {
  const [otp, setOtp] = useState<string>("");
  const [otpError, setOtpError] = useState<string | null>(null);
  const { loading, resendLoading, resendSuccess, handleOTPSubmit, handleResendOTP, error, sucessRegister, resetSuccessRegister } = useOTPController();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
    if (event.target.value) {
      setOtpError(null); // Clear the error if the user starts typing
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!otp) {
      setOtpError("OTP is required");
      return;
    }
    await handleOTPSubmit(email, otp);

    if (sucessRegister) {
      onSuccessRegister(); // Notify the parent component that registration was successful
      resetSuccessRegister(); // Reset the success state in the controller
      onResetSuccessRegister(); // Notify the parent to reset the success state if needed
    }
  };

  useEffect(() => {
    if (sucessRegister) {
      onSuccessRegister(); // Call the success callback in case of success
      resetSuccessRegister(); // Reset the success state in the controller
    }
  }, [sucessRegister, onSuccessRegister, resetSuccessRegister]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ffffff',
        padding: '32px',
        width: '100%',
        maxWidth: '400px',
        borderRadius: '16px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0px 12px 36px rgba(0, 0, 0, 0.25)',
        },
      }}
    >
      <IconButton
        sx={{ position: 'absolute', top: 16, right: 16 }}
        onClick={onClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 600 }}>
        Verify Your Email
      </Typography>
      <Typography variant="body2" gutterBottom align="center" color="textSecondary" sx={{ mb: 4 }}>
        Please enter the OTP sent to your email address.
      </Typography>
      {error && (
        <Typography
          variant="body2"
          align="left"
          color="error"
          sx={{
            mb: 2,
            backgroundColor: '#f8d7da',
            padding: '12px',
            borderRadius: '4px',
            fontWeight: 500,
            border: '1px solid #f5c6cb',
            color: '#721c24',
          }}
        >
          • {error}
        </Typography>
      )}
      <form onSubmit={onSubmit} noValidate style={{ width: "100%" }}>
        <TextField
          id="otp"
          label="OTP"
          variant="outlined"
          fullWidth
          margin="normal"
          value={otp}
          onChange={handleChange}
          required
          error={!!otpError}
          helperText={otpError}
          InputProps={{
            sx: {
              fontSize: '1.1rem',
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: '1rem',
              color: otpError ? '#d32f2f' : 'rgba(0, 0, 0, 0.6)',
              transition: 'color 0.3s ease-in-out',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            mb: 2,
            padding: '12px 0',
            backgroundColor: '#6200ea',
            '&:hover': {
              backgroundColor: '#3700b3',
            },
            fontWeight: 540,
            fontSize: '1rem',
            textTransform: 'none',
            borderRadius: '8px',
            transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
            '&:active': {
              transform: 'scale(0.98)',
            },
          }}
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
        >
          {loading ? "Verifying..." : "Submit OTP"}
        </Button>
      </form>
      <Button
        variant="text"
        color="primary"
        fullWidth
        onClick={handleResendOTP}
        sx={{
          mt: 1,
          textTransform: 'none',
          fontWeight: 540,
          fontSize: '0.9rem',
          color: resendSuccess ? '#2e7d32' : '#6200ea',
          transition: 'color 0.3s ease-in-out, background-color 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: resendSuccess ? 'transparent' : 'rgba(98, 0, 234, 0.08)',
          },
          '&:disabled': {
            color: 'rgba(98, 0, 234, 0.5)',
          },
        }}
        disabled={resendLoading}
        startIcon={resendLoading ? <CircularProgress size={20} color="inherit" /> : resendSuccess ? <CheckCircleIcon sx={{ mr: 0.5 }} /> : null}
      >
        {resendSuccess ? "OTP Resent Successfully" : "Resend OTP"}
      </Button>
    </Box>
  );
};

export default OTPInput;
