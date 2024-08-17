import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useChangePasswordController } from "../controllers/changepassword.controller";

interface ChangePasswordTemplateProps {
  email: string;
  onClose: () => void;
  onSuccessPasswordChange: () => void;
  onResetPasswordChange: () => void;
}

const ChangePasswordTemplate: React.FC<ChangePasswordTemplateProps> = ({
  email,
  onClose,
  onSuccessPasswordChange,
  onResetPasswordChange,
}) => {
  const {
    newPassword,
    confirmPassword,
    error,
    loading,
    setNewPassword,
    setConfirmPassword,
    handleChangePassword,
  } = useChangePasswordController();

  const [newPasswordError, setNewPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async () => {
    // Clear previous field errors
    setNewPasswordError(null);
    setConfirmPasswordError(null);

    // Validate fields before submitting
    let hasError = false;
    if (!newPassword) {
      setNewPasswordError("Password is required");
      hasError = true;
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
      hasError = true;
    }
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const success = await handleChangePassword(email, confirmPassword);
  
    if (success) {
      onSuccessPasswordChange();
    }
  };

  const handleClose = () => {
    onResetPasswordChange();
    onClose();
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ffffff',
        padding: '40px',
        width: '100%',
        maxWidth: '500px',
        borderRadius: '20px',
        boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0px 15px 45px rgba(0, 0, 0, 0.25)',
        },
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdZrpcH2NHUd21rv-EI2oWQhLP1Zc_4sZgTq8tQHiwXuJHLVeecf9UHo4qXjkBk48sUA&usqp=CAU"
        alt="Change Password"
        style={{
          width: '300px',
          marginBottom: '20px',
        }}
      />
      <Typography
        variant="h5"
        mb={2}
        fontWeight="bold"
        sx={{
          fontSize: "28px",
          color: "#333",
        }}
      >
        Change Your Password
      </Typography>
      <Typography variant="body2" mb={4} sx={{ fontSize: "18px", color: "#555" }}>
        Please enter your new password below.
      </Typography>

      {error && (
        <Box
          mb={2}
          px={2}
          py={1}
          bgcolor="#fdecea"
          borderRadius={1}
          sx={{
            fontSize: "16px",
          }}
        >
          <Typography color="#d32f2f" variant="body2" align="center">
            • {error}
          </Typography>
        </Box>
      )}

      <TextField
        id="new-password"
        label="New Password"
        type={showNewPassword ? "text" : "password"}
        variant="outlined"
        fullWidth
        margin="normal"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        error={!!newPasswordError}
        helperText={newPasswordError || ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowNewPassword(!showNewPassword)}
                edge="end"
              >
                {showNewPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          fontSize: "18px",
          marginBottom: 2,
          borderRadius: '12px',
        }}
      />
      <TextField
        id="confirm-password"
        label="Confirm Password"
        type={showConfirmPassword ? "text" : "password"}
        variant="outlined"
        fullWidth
        margin="normal"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={!!confirmPasswordError}
        helperText={confirmPasswordError || ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          fontSize: "18px",
          marginBottom: 3,
          borderRadius: '12px',
        }}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: "#6200ea",
          "&:hover": { bgcolor: "#3700b3" },
          borderRadius: "12px",
          fontSize: "18px",
          padding: "14px",
          transition: 'background 0.3s ease-in-out',
        }}
        onClick={handleSubmit}
        disabled={loading}
        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
      >
        {loading ? "Changing..." : "Change Password"}
      </Button>
      <Button
        variant="text"
        fullWidth
        sx={{
          mt: 2,
          color: "#6200ea",
          fontSize: "16px",
          padding: "14px",
          '&:hover': {
            color: "#3700b3",
            textDecoration: 'underline',
          },
        }}
        onClick={handleClose}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default ChangePasswordTemplate;
