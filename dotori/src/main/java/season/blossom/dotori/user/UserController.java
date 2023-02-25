package season.blossom.dotori.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:5500", allowCredentials = "true")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;


    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterRequestDto authRequestDto) {
        authRequestDto.setPassword(passwordEncoder.encode(authRequestDto.getPassword()));

        User registeredUser = userService.registerUser(authRequestDto);

        return new ResponseEntity<>(registeredUser, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(HttpServletRequest request, HttpServletResponse response,
                                   @RequestBody LoginRequestDto loginRequestDto){
        UserDetails userDetails = userService.loadUserByUsername(loginRequestDto.getEmail());
        Authentication authentication
                = new UsernamePasswordAuthenticationToken(userDetails, loginRequestDto.getPassword(), new ArrayList<>());
        try {
            authenticationManager.authenticate(authentication);
        }
        catch (AuthenticationException e){
            throw new BadCredentialsException("Invalid email or password");
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);
        HttpSession session = request.getSession();
        session.setAttribute
                (HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY,
                        SecurityContextHolder.getContext());

        Cookie cookie = new Cookie("JSESSIONID", session.getId());
        cookie.setPath("/");
//        cookie.setHttpOnly(true);
        cookie.setMaxAge(30000 * 60);
        cookie.setSecure(true);
        response.addCookie(cookie);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/profile")
    public ResponseEntity<UserReturnDto> userInfo(@AuthenticationPrincipal CustomUserDetail customUserDetail, @RequestBody UserReturnDto userReturnDto) {
        User user = userService.updateInfo(customUserDetail.getUser(), userReturnDto);
        UserReturnDto userReturn = userService.getUser(user);

        return ResponseEntity.ok(userReturn);
    }

    @GetMapping("/profile")
    public ResponseEntity<UserReturnDto> getUserInfo(@AuthenticationPrincipal CustomUserDetail customUserDetail) {
        UserReturnDto userReturn = userService.getUser(customUserDetail.getUser());

        return ResponseEntity.status(HttpStatus.OK).body(userReturn);
    }

    @GetMapping("/profile/{no}")
    public ResponseEntity<UserReturnDto> getUserInfo(@PathVariable("no") Long no) {
        UserReturnDto userReturn = userService.getUser(no);

        return ResponseEntity.status(HttpStatus.OK).body(userReturn);
    }

    @PutMapping("/mypage/edit")
    public ResponseEntity<UserReturnDto> updateUserInfo(@AuthenticationPrincipal CustomUserDetail customUserDetail, @RequestBody UserReturnDto userReturnDto) {
        User user = userService.updateInfo(customUserDetail.getUser(), userReturnDto);
        UserReturnDto userReturn = userService.getUser(user);

        return ResponseEntity.ok(userReturn);
    }

    @PostMapping("/mypage/changepw")
    public ResponseEntity<HttpStatus> changePwd(@AuthenticationPrincipal CustomUserDetail customUserDetail, @RequestBody PwdRequestDto pwdRequestDto) {
        try {
            userService.updatePwd(customUserDetail.getUser(),pwdRequestDto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
