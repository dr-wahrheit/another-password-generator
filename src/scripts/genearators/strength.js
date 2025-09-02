import zxcvbn from 'zxcvbn';

export function calculateStrength(password) {
    const result = zxcvbn(password);
    
    return {
        score: result.score,
        entropy: result.guesses_log10 * Math.log(10) / Math.log(2),
        feedback: result.feedback,
        crackTime: result.crack_times_display.offline_slow_hashing_1e4_per_second
    };
}
