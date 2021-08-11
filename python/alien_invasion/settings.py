class Settings():
    def __init__(self):
        # 窗口设置
        self.screen_width = 1200
        self.screen_height = 800
        self.bg_color = (230, 230, 230)

        # 子弹设置
        self.bullet_color = 60, 60, 60
        self.bullet_width = 3
        self.bullet_height = 15
        self.bullet_speed_factor = 1

        # 外星人
        self.alien_speed_factor = 1
        self.fleet_direction = 1
        self.flest_drop_speed = 10
